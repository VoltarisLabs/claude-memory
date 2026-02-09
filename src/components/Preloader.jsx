import { useState, useEffect, createContext, useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from './Logo'

const PreloaderContext = createContext(null)

export function usePreloader() {
  return useContext(PreloaderContext)
}

export function PreloaderProvider({ children, minDuration = 1500 }) {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        const increment = Math.max(1, (100 - prev) / 10)
        return Math.min(prev + increment, 99)
      })
    }, 50)

    const timer = setTimeout(() => {
      setProgress(100)
      setTimeout(() => setIsLoading(false), 400)
    }, minDuration)

    return () => {
      clearInterval(interval)
      clearTimeout(timer)
    }
  }, [minDuration])

  const finishLoading = () => {
    setProgress(100)
    setTimeout(() => setIsLoading(false), 400)
  }

  return (
    <PreloaderContext.Provider value={{ isLoading, progress, finishLoading }}>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="preloader"
            className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden"
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          >
            {/* Ambient glow orbs */}
            <motion.div
              className="absolute w-[400px] h-[400px] rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(0,128,255,0.12) 0%, transparent 70%)',
                filter: 'blur(60px)',
              }}
              animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute w-[300px] h-[300px] rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(79,26,214,0.1) 0%, transparent 70%)',
                filter: 'blur(50px)',
                transform: 'translate(100px, -50px)',
              }}
              animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Pulsing concentric rings */}
            {[0, 1, 2].map((i) => (
              <motion.div
                key={`ring-${i}`}
                className="absolute rounded-full border border-[#0080FF]/10"
                style={{ width: 120 + i * 80, height: 120 + i * 80 }}
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.15 - i * 0.03, 0.3 - i * 0.05, 0.15 - i * 0.03],
                  rotate: [0, i % 2 === 0 ? 90 : -90],
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.3,
                }}
              />
            ))}

            {/* Central content */}
            <div className="text-center relative z-10">
              {/* Title Voice Logo with breathing animation */}
              <motion.div
                className="relative mx-auto mb-8 flex items-center justify-center"
                initial={{ scale: 0, opacity: 0, rotate: -180 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 150, damping: 15 }}
              >
                {/* Pulsing glow behind logo */}
                <motion.div
                  className="absolute inset-0 blur-2xl opacity-40"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  style={{
                    background: 'radial-gradient(circle, rgba(0,128,255,0.6) 0%, rgba(79,26,214,0.4) 50%, transparent 70%)'
                  }}
                />

                {/* Logo with subtle breathing effect */}
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                    y: [0, -3, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative"
                >
                  <Logo size="large" />
                </motion.div>

                {/* Orbiting particles around logo */}
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={`orbit-${i}`}
                    className="absolute w-2 h-2 rounded-full bg-gradient-to-br from-[#0080FF] to-[#4F1AD6]"
                    style={{
                      top: '50%',
                      left: '50%',
                    }}
                    animate={{
                      x: [0, Math.cos((i * 120 * Math.PI) / 180) * 70, 0],
                      y: [0, Math.sin((i * 120 * Math.PI) / 180) * 70, 0],
                      scale: [0.5, 1, 0.5],
                      opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.3,
                    }}
                  />
                ))}
              </motion.div>

              {/* Brand text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-8"
              >
                <motion.p
                  className="text-white/40 text-sm tracking-wider font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  AI-Powered Voice Agent
                </motion.p>
              </motion.div>

              {/* Enhanced progress bar */}
              <motion.div
                className="w-48 h-[2px] bg-white/[0.06] mx-auto overflow-hidden rounded-full relative"
                initial={{ opacity: 0, scaleX: 0.5 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ delay: 0.3, duration: 0.4 }}
              >
                <motion.div
                  className="h-full bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] rounded-full relative"
                  initial={{ width: '0%' }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: 'linear' }}
                >
                  {/* Glowing tip */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#0080FF] shadow-[0_0_10px_rgba(0,128,255,0.8)]" />
                </motion.div>
              </motion.div>

              {/* Progress percentage */}
              <motion.span
                className="text-white/20 text-xs font-mono mt-3 block tabular-nums"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                {Math.round(progress)}%
              </motion.span>
            </div>

            {/* Floating particles */}
            {Array.from({ length: 6 }, (_, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute w-1 h-1 rounded-full bg-[#0080FF]/40"
                style={{
                  left: `${15 + i * 14}%`,
                  top: `${20 + (i % 3) * 25}%`,
                }}
                animate={{
                  y: [-20, 20, -20],
                  x: [-10, 10, -10],
                  opacity: [0.2, 0.6, 0.2],
                  scale: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.4,
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </PreloaderContext.Provider>
  )
}
