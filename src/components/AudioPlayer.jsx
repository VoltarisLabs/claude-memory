import { useState, useRef, useEffect, useCallback } from 'react'
import { Play, Pause } from 'lucide-react'

// Global reference to track currently playing audio
let currentlyPlayingAudio = null

const BAR_COUNT = 120

const AudioPlayer = ({ src, title }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [waveformData, setWaveformData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const audioRef = useRef(null)
  const canvasRef = useRef(null)
  const containerRef = useRef(null)
  const animationFrameRef = useRef(null)
  const isDraggingRef = useRef(false)

  const formatTime = (time) => {
    if (!time || isNaN(time)) return '0:00'
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
  }

  // Extract static waveform shape from audio file
  const extractWaveformData = useCallback(async (audioSrc) => {
    try {
      setIsLoading(true)

      // Fetch with error handling
      const response = await fetch(audioSrc)
      if (!response.ok) {
        throw new Error(`Failed to fetch audio: ${response.status}`)
      }
      const arrayBuffer = await response.arrayBuffer()

      // Create offline context for decoding only
      const AudioCtx = window.AudioContext || window.webkitAudioContext
      const offlineCtx = new AudioCtx()

      let audioBuffer
      try {
        audioBuffer = await offlineCtx.decodeAudioData(arrayBuffer)
      } catch (decodeError) {
        console.error('Decode error:', decodeError)
        throw decodeError
      }

      const rawData = audioBuffer.getChannelData(0)
      const totalSamples = rawData.length
      const samplesPerBar = Math.floor(totalSamples / BAR_COUNT)

      const bars = []
      for (let i = 0; i < BAR_COUNT; i++) {
        let sum = 0
        const start = i * samplesPerBar
        const end = Math.min(start + samplesPerBar, totalSamples)
        for (let j = start; j < end; j++) {
          sum += Math.abs(rawData[j])
        }
        bars.push(sum / (end - start))
      }

      // Normalize to 0-1
      const maxAmplitude = Math.max(...bars)
      const normalized = bars.map(val =>
        maxAmplitude > 0 ? val / maxAmplitude : 0
      )

      setWaveformData(normalized)

      // Close the offline context
      if (offlineCtx.state !== 'closed') {
        await offlineCtx.close()
      }
    } catch (err) {
      console.error(`Failed to extract waveform from ${audioSrc}:`, err)
      // Fallback waveform
      const fallback = Array.from({ length: BAR_COUNT }, (_, i) =>
        0.15 + Math.abs(Math.sin(i * 0.2)) * 0.5 + Math.random() * 0.2
      )
      setWaveformData(fallback)
    } finally {
      setIsLoading(false)
    }
  }, [])

  // Draw the waveform on canvas
  const drawWaveform = useCallback((overrideTime) => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container || !waveformData) return

    const ctx = canvas.getContext('2d')
    const dpr = window.devicePixelRatio || 1

    const cssWidth = container.clientWidth
    const cssHeight = container.clientHeight

    canvas.width = cssWidth * dpr
    canvas.height = cssHeight * dpr
    canvas.style.width = `${cssWidth}px`
    canvas.style.height = `${cssHeight}px`
    ctx.scale(dpr, dpr)

    ctx.clearRect(0, 0, cssWidth, cssHeight)

    const totalBarWidth = cssWidth / BAR_COUNT
    const barWidth = Math.max(2, totalBarWidth * 0.55)
    const gap = totalBarWidth - barWidth
    const centerY = cssHeight / 2
    const maxBarHeight = (cssHeight / 2) - 4

    const time = overrideTime !== undefined ? overrideTime : currentTime
    const progress = duration > 0 ? time / duration : 0
    const progressX = progress * cssWidth

    for (let i = 0; i < BAR_COUNT; i++) {
      const amplitude = waveformData[i]
      const barHeight = Math.max(2, amplitude * maxBarHeight)
      const x = i * totalBarWidth + (gap / 2)
      const barMidX = x + barWidth / 2

      // Played = blue, unplayed = dim white
      ctx.fillStyle = barMidX <= progressX
        ? '#0080FF'
        : 'rgba(255, 255, 255, 0.2)'

      // Bar up from center
      ctx.beginPath()
      ctx.roundRect(x, centerY - barHeight, barWidth, barHeight, 1.5)
      ctx.fill()

      // Mirror bar down from center
      ctx.beginPath()
      ctx.roundRect(x, centerY + 1, barWidth, barHeight, 1.5)
      ctx.fill()
    }

    // Subtle center line
    ctx.fillStyle = 'rgba(255, 255, 255, 0.06)'
    ctx.fillRect(0, centerY - 0.5, cssWidth, 1)
  }, [waveformData, currentTime, duration])

  // Render loop for smooth playhead
  const startRenderLoop = useCallback(() => {
    const render = () => {
      if (audioRef.current) {
        const time = audioRef.current.currentTime
        setCurrentTime(time)
        drawWaveform(time)
      }
      animationFrameRef.current = requestAnimationFrame(render)
    }
    render()
  }, [drawWaveform])

  const stopRenderLoop = useCallback(() => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current)
      animationFrameRef.current = null
    }
  }, [])

  // Play/pause toggle
  const togglePlay = async () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
    } else {
      if (currentlyPlayingAudio && currentlyPlayingAudio !== audioRef.current) {
        currentlyPlayingAudio.pause()
      }
      currentlyPlayingAudio = audioRef.current
      await audioRef.current.play()
    }
  }

  // Seek helpers
  const getSeekFraction = (e) => {
    const canvas = canvasRef.current
    if (!canvas) return 0
    const rect = canvas.getBoundingClientRect()
    const x = (e.clientX || e.touches?.[0]?.clientX || 0) - rect.left
    return Math.max(0, Math.min(1, x / rect.width))
  }

  const seekTo = (fraction) => {
    if (!audioRef.current || !duration) return
    audioRef.current.currentTime = fraction * duration
    setCurrentTime(fraction * duration)
    drawWaveform(fraction * duration)
  }

  const handlePointerDown = (e) => {
    isDraggingRef.current = true
    seekTo(getSeekFraction(e))
    canvasRef.current?.setPointerCapture(e.pointerId)
  }

  const handlePointerMove = (e) => {
    if (!isDraggingRef.current) return
    seekTo(getSeekFraction(e))
  }

  const handlePointerUp = () => {
    isDraggingRef.current = false
  }

  // Extract waveform on mount
  useEffect(() => {
    if (src) extractWaveformData(src)
  }, [src, extractWaveformData])

  // Audio event listeners
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const onPlay = () => {
      setIsPlaying(true)
      startRenderLoop()
    }

    const onPause = () => {
      setIsPlaying(false)
      stopRenderLoop()
      drawWaveform()
    }

    const onLoadedMetadata = () => {
      setDuration(audio.duration || 0)
    }

    const onEnded = () => {
      setIsPlaying(false)
      setCurrentTime(0)
      stopRenderLoop()
      audio.currentTime = 0
      drawWaveform(0)
    }

    audio.addEventListener('play', onPlay)
    audio.addEventListener('pause', onPause)
    audio.addEventListener('loadedmetadata', onLoadedMetadata)
    audio.addEventListener('ended', onEnded)

    return () => {
      audio.removeEventListener('play', onPlay)
      audio.removeEventListener('pause', onPause)
      audio.removeEventListener('loadedmetadata', onLoadedMetadata)
      audio.removeEventListener('ended', onEnded)
    }
  }, [startRenderLoop, stopRenderLoop, drawWaveform])

  // Redraw on data load
  useEffect(() => {
    drawWaveform()
  }, [drawWaveform])

  // Resize handler
  useEffect(() => {
    const handleResize = () => drawWaveform()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [drawWaveform])

  // Cleanup on unmount
  useEffect(() => {
    return () => stopRenderLoop()
  }, [stopRenderLoop])

  return (
    <div className="group relative">
      <audio ref={audioRef} src={src} preload="metadata" crossOrigin="anonymous" />

      {/* Minimal card */}
      <div className="relative flex items-center gap-2 sm:gap-3 px-2 sm:px-3 md:px-4 py-2 sm:py-3
                    bg-white/[0.04] border border-white/[0.08] rounded-xl
                    transition-colors duration-300 hover:bg-white/[0.06]">

        {/* Play/Pause */}
        <button
          onClick={togglePlay}
          disabled={isLoading}
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-full flex items-center justify-center
                   bg-[#0080FF] hover:bg-[#0073e6] active:scale-95
                   transition-all duration-200 flex-shrink-0
                   disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {isPlaying ? (
            <Pause className="w-4 h-4 fill-white text-white" />
          ) : (
            <Play className="w-4 h-4 fill-white text-white ml-0.5" />
          )}
        </button>

        {/* Canvas Waveform */}
        <div ref={containerRef} className="flex-1 h-8 sm:h-10 md:h-12 relative cursor-pointer">
          {isLoading ? (
            <div className="flex items-center justify-center h-full gap-[3px]">
              {Array.from({ length: 30 }).map((_, i) => (
                <div
                  key={i}
                  className="w-[3px] bg-white/10 rounded-full animate-pulse"
                  style={{
                    height: `${6 + Math.abs(Math.sin(i * 0.4)) * 24}px`,
                    animationDelay: `${i * 0.05}s`
                  }}
                />
              ))}
            </div>
          ) : (
            <canvas
              ref={canvasRef}
              className="w-full h-full touch-none"
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
            />
          )}
        </div>

        {/* Time */}
        <div className="text-xs sm:text-sm font-mono text-white/50 tabular-nums flex-shrink-0 min-w-[45px] sm:min-w-[55px] md:min-w-[65px] text-right">
          <span className="text-white/80">{formatTime(currentTime)}</span>
          <span className="text-white/30"> / </span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* Title caption */}
      {title && (
        <p className="text-white/40 text-xs mt-1.5 ml-1 tracking-wide font-medium">
          {title}
        </p>
      )}
    </div>
  )
}

export default AudioPlayer
