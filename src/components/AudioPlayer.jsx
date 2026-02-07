
import React, { useState, useRef, useCallback, useEffect } from 'react'
import { Play, Pause } from 'lucide-react'
import { motion } from 'framer-motion'

// Global reference to track currently playing audio
let currentlyPlayingAudio = null

const AudioPlayer = ({
    src,
    title = "Voice Demo",
    initialDuration = "0:00"
}) => {
    const [isPlaying, setIsPlaying] = useState(false)
    const [currentTime, setCurrentTime] = useState(0)
    const [duration, setDuration] = useState(0)
    const audioRef = useRef(null)
    const progressBarRef = useRef(null)

    const formatTime = (time) => {
        if (!time) return "0:00"
        const minutes = Math.floor(time / 60)
        const seconds = Math.floor(time % 60)
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
    }

    const togglePlay = async () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause()
            } else {
                // Pause any other currently playing audio
                if (currentlyPlayingAudio && currentlyPlayingAudio !== audioRef.current) {
                    currentlyPlayingAudio.pause()
                }
                currentlyPlayingAudio = audioRef.current
                await audioRef.current.play()
            }
            setIsPlaying(!isPlaying)
        }
    }

    const handleTimeUpdate = () => {
        if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime)
        }
    }

    const handleLoadedMetadata = () => {
        if (audioRef.current) {
            setDuration(audioRef.current.duration)
        }
    }

    const handleEnded = () => {
        setIsPlaying(false)
        setCurrentTime(0)
        if (audioRef.current) {
            audioRef.current.currentTime = 0
            if (currentlyPlayingAudio === audioRef.current) {
                currentlyPlayingAudio = null
            }
        }
    }

    const handlePause = () => {
        setIsPlaying(false)
    }

    const handleProgressClick = (e) => {
        if (!audioRef.current || !progressBarRef.current) return
        const rect = progressBarRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const percentage = Math.max(0, Math.min(1, x / rect.width))
        audioRef.current.currentTime = percentage * (duration || 0)
        setCurrentTime(audioRef.current.currentTime)
    }

    // Listen for external pause events
    useEffect(() => {
        const audio = audioRef.current
        if (audio) {
            audio.addEventListener('pause', handlePause)
            return () => {
                audio.removeEventListener('pause', handlePause)
            }
        }
    }, [])

    const progress = duration ? (currentTime / duration) * 100 : 0

    return (
        <div className="w-full max-w-3xl bg-black/40 backdrop-blur-md border border-white/[0.08] rounded-xl px-5 py-2.5 relative overflow-hidden shadow-2xl shadow-blue-500/10 hover:border-white/[0.12] transition-all duration-300 group">
            {/* Glossy glass effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent pointer-events-none rounded-xl" />

            {/* Subtle glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/[0.02] to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl blur-xl" />

            <audio
                ref={audioRef}
                src={src}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                onEnded={handleEnded}
                className="hidden"
            />

            {/* Header: Title + Duration */}
            <div className="flex items-center justify-between mb-2 relative z-10">
                <span className="text-white/90 text-[13px] font-medium font-['Urbanist'] tracking-wide">
                    {title}
                </span>
                <span className="text-white/40 font-mono text-[11px]">
                    {formatTime(duration || 0)}
                </span>
            </div>

            {/* Controls & Waveform */}
            <div className="flex items-center gap-3 relative z-10">
                {/* Play/Pause Button */}
                <motion.button
                    onClick={togglePlay}
                    className="relative w-9 h-9 flex-shrink-0 rounded-full bg-gradient-to-br from-[#0088ff] to-[#0066cc] flex items-center justify-center text-white hover:from-[#0099ff] hover:to-[#0077dd] transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50"
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.92 }}
                >
                    {/* Inner glossy highlight */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/30 via-white/10 to-transparent" />

                    {/* Subtle outer ring */}
                    <div className="absolute inset-0 rounded-full ring-1 ring-white/20" />

                    {isPlaying ? (
                        <Pause className="w-3.5 h-3.5 fill-white relative z-10" />
                    ) : (
                        <Play className="w-3.5 h-3.5 fill-white ml-0.5 relative z-10" />
                    )}
                </motion.button>

                {/* Static Waveform Visualization */}
                <div className="flex-1 relative h-6 cursor-pointer" onClick={handleProgressClick} ref={progressBarRef}>
                    {/* Dashed waveform lines */}
                    <svg className="w-full h-full" viewBox="0 0 800 40" preserveAspectRatio="none">
                        <defs>
                            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#0080FF" stopOpacity={progress > 0 ? "0.9" : "0.15"} />
                                <stop offset={`${progress}%`} stopColor="#0080FF" stopOpacity="0.9" />
                                <stop offset={`${progress}%`} stopColor="rgba(255,255,255,0.15)" stopOpacity="0.15" />
                                <stop offset="100%" stopColor="rgba(255,255,255,0.15)" stopOpacity="0.15" />
                            </linearGradient>
                        </defs>

                        {/* Generate waveform pattern */}
                        {Array.from({ length: 120 }).map((_, i) => {
                            const x = (i / 120) * 800
                            // Create varied heights for visual interest
                            const baseHeight = 15 + Math.sin(i * 0.3) * 5 + Math.cos(i * 0.7) * 3
                            const height = Math.abs(baseHeight)
                            const y = 20 - height / 2

                            return (
                                <rect
                                    key={i}
                                    x={x}
                                    y={y}
                                    width="3"
                                    height={height}
                                    fill="url(#waveGradient)"
                                    rx="1"
                                />
                            )
                        })}
                    </svg>
                </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-2 relative h-[3px] bg-white/[0.08] rounded-full overflow-hidden cursor-pointer"
                onClick={handleProgressClick}
            >
                <div
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#0080FF] via-[#0090ff] to-[#00a0ff] rounded-full transition-[width] duration-100"
                    style={{
                        width: `${progress}%`,
                        boxShadow: '0 0 8px rgba(0, 128, 255, 0.6), 0 0 16px rgba(0, 128, 255, 0.3)'
                    }}
                >
                    {/* Glossy top highlight on progress bar */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-transparent rounded-full" />
                </div>
            </div>
        </div>
    )
}

export default AudioPlayer
