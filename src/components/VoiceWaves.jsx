import { useEffect, useRef } from 'react'
import { useReducedMotion } from '../hooks/useReducedMotion'

/**
 * VoiceWaves — Canvas-based audio waveform visualization
 * Looks like an actual voice/audio signal with vertical amplitude bars
 */
const VoiceWaves = ({
  className = '',
  waveColor = '#0080FF',
  waveCount = 2,
  opacity = 0.08,
  speed = 0.8,
}) => {
  const canvasRef = useRef(null)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // If reduced motion, render nothing (skip waveform animation)
    if (prefersReducedMotion) return

    let animationFrameId
    let time = 0

    // Pre-generate "voice" amplitude data (pseudo-random speech pattern)
    const generateVoiceData = (length) => {
      const data = []
      for (let i = 0; i < length; i++) {
        // Simulate speech: clusters of high amplitude with quieter gaps
        const wordPos = (i % 60) / 60
        // Speech envelope — bursts of sound with pauses
        const speechEnvelope =
          wordPos < 0.7
            ? Math.sin(wordPos / 0.7 * Math.PI) * (0.4 + Math.random() * 0.6)
            : Math.random() * 0.1
        data.push(speechEnvelope)
      }
      return data
    }

    const voiceData = [
      generateVoiceData(200),
      generateVoiceData(200),
      generateVoiceData(200),
    ]

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = canvas.offsetWidth * dpr
      canvas.height = canvas.offsetHeight * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const width = () => canvas.offsetWidth
    const height = () => canvas.offsetHeight

    const drawVoiceWave = (centerY, maxAmplitude, data, barWidth, waveOpacity, timeOffset) => {
      const w = width()
      const totalBars = Math.floor(w / (barWidth + 2))
      const dataLen = data.length

      ctx.globalAlpha = waveOpacity

      for (let i = 0; i < totalBars; i++) {
        const x = i * (barWidth + 2)
        const progress = i / totalBars

        // Edge fade envelope
        const edgeFade = Math.sin(progress * Math.PI)

        // Sample from voice data with time-based offset for animation
        const dataIndex = Math.floor((i * 0.8 + time * speed * 15 + timeOffset) % dataLen)
        const nextIndex = (dataIndex + 1) % dataLen
        const frac = ((i * 0.8 + time * speed * 15 + timeOffset) % dataLen) - dataIndex
        // Smooth interpolation between samples
        const sample = data[dataIndex] * (1 - frac) + data[nextIndex] * frac

        // Add slow breathing modulation
        const breathe = 0.5 + 0.5 * Math.sin(time * speed * 0.3 + progress * 2)

        const barHeight = sample * maxAmplitude * edgeFade * (0.6 + breathe * 0.4)

        if (barHeight < 1) continue

        // Draw the bar (mirrored from center)
        const gradient = ctx.createLinearGradient(x, centerY - barHeight, x, centerY + barHeight)
        gradient.addColorStop(0, 'transparent')
        gradient.addColorStop(0.3, waveColor)
        gradient.addColorStop(0.5, waveColor)
        gradient.addColorStop(0.7, waveColor)
        gradient.addColorStop(1, 'transparent')

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.roundRect(x, centerY - barHeight, barWidth, barHeight * 2, barWidth / 2)
        ctx.fill()
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, width(), height())
      const h = height()

      const waves = [
        { centerY: h * 0.35, amplitude: 35, barWidth: 2, opacity: opacity, timeOffset: 0 },
        { centerY: h * 0.55, amplitude: 45, barWidth: 2.5, opacity: opacity * 0.7, timeOffset: 70 },
        { centerY: h * 0.75, amplitude: 25, barWidth: 2, opacity: opacity * 0.5, timeOffset: 140 },
      ]

      for (let i = 0; i < Math.min(waveCount, waves.length); i++) {
        const w = waves[i]
        drawVoiceWave(w.centerY, w.amplitude, voiceData[i], w.barWidth, w.opacity, w.timeOffset)
      }

      time += 0.016
      animationFrameId = requestAnimationFrame(animate)
    }

    resize()
    animate()

    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(canvas)

    return () => {
      cancelAnimationFrame(animationFrameId)
      resizeObserver.disconnect()
    }
  }, [waveColor, waveCount, opacity, speed, prefersReducedMotion])

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none w-full h-full ${className}`}
    />
  )
}

export default VoiceWaves
