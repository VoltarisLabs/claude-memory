import { useState, useEffect, createContext, useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

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
            className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="text-center">
              {/* Logo text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
              >
                <span className="text-2xl font-bold font-['Urbanist'] bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] bg-clip-text text-transparent">
                  Title Voice
                </span>
              </motion.div>

              {/* Progress bar */}
              <motion.div
                className="w-48 h-[2px] bg-white/10 mx-auto overflow-hidden rounded-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <motion.div
                  className="h-full bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] rounded-full"
                  initial={{ width: '0%' }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: 'linear' }}
                />
              </motion.div>
            </div>
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
