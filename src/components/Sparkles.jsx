import { useEffect, useRef } from 'react'
import { useReducedMotion } from '../hooks/useReducedMotion'

/**
 * Sparkles — Canvas-based twinkling particle background
 * Adapted from website-design-2026 demos/saas pattern
 */
const Sparkles = ({
  className = '',
  particleColor = '#06b6d4',
  minSize = 1,
  maxSize = 3,
  particleDensity = 40,
  speed = 1,
}) => {
  const canvasRef = useRef(null)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // If reduced motion, draw static sparkles and stop
    if (prefersReducedMotion) {
      const resize = () => {
        canvas.width = canvas.offsetWidth
        canvas.height = canvas.offsetHeight
      }
      resize()
      for (let i = 0; i < particleDensity; i++) {
        ctx.beginPath()
        ctx.arc(
          Math.random() * canvas.width,
          Math.random() * canvas.height,
          Math.random() * (maxSize - minSize) + minSize,
          0, Math.PI * 2
        )
        ctx.fillStyle = particleColor
        ctx.globalAlpha = Math.random() * 0.6 + 0.2
        ctx.fill()
      }
      return
    }

    let animationFrameId
    let sparkles = []

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      createSparkles()
    }

    const createSparkles = () => {
      sparkles = []
      for (let i = 0; i < particleDensity; i++) {
        sparkles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * (maxSize - minSize) + minSize,
          opacity: Math.random(),
          fadeDirection: Math.random() > 0.5 ? 1 : -1,
        })
      }
    }

    const drawSparkles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      sparkles.forEach((sparkle) => {
        sparkle.opacity += sparkle.fadeDirection * 0.02 * speed
        if (sparkle.opacity >= 1 || sparkle.opacity <= 0) {
          sparkle.fadeDirection *= -1
        }

        ctx.beginPath()
        ctx.arc(sparkle.x, sparkle.y, sparkle.size, 0, Math.PI * 2)
        ctx.fillStyle = particleColor
        ctx.globalAlpha = Math.max(0, Math.min(1, sparkle.opacity))
        ctx.fill()
      })

      animationFrameId = requestAnimationFrame(drawSparkles)
    }

    resize()
    drawSparkles()

    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(canvas)

    return () => {
      cancelAnimationFrame(animationFrameId)
      resizeObserver.disconnect()
    }
  }, [particleColor, minSize, maxSize, particleDensity, speed, prefersReducedMotion])

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none w-full h-full ${className}`}
    />
  )
}

export default Sparkles
