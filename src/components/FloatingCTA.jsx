import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, X } from 'lucide-react'

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 500px down
      if (window.scrollY > 500 && !isDismissed) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isDismissed])

  const handleDismiss = (e) => {
    e.stopPropagation()
    setIsDismissed(true)
    setIsVisible(false)
  }

  const handleClick = () => {
    window.open('https://cal.com/title-voice-ai-tsigyx/30min', '_blank')
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.8 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 25,
            duration: 0.3
          }}
          className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 group"
        >
          {/* Dismiss button */}
          <button
            onClick={handleDismiss}
            className="absolute -top-2 -right-2 w-6 h-6 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10"
            aria-label="Dismiss"
          >
            <X className="w-3 h-3 text-white" />
          </button>

          {/* Main CTA button */}
          <motion.button
            onClick={handleClick}
            className="relative flex items-center gap-3 px-4 sm:px-6 py-3 sm:py-4 rounded-full overflow-hidden shadow-2xl max-w-[90%] sm:max-w-none"
            style={{
              background: 'linear-gradient(135deg, #0080FF 0%, #4F1AD6 100%)',
              backgroundSize: '200% 200%',
            }}
            whileHover={{
              scale: 1.05,
              backgroundPosition: '100% 0%',
            }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                '0 10px 40px rgba(0, 128, 255, 0.3)',
                '0 10px 60px rgba(79, 26, 214, 0.4)',
                '0 10px 40px rgba(0, 128, 255, 0.3)',
              ],
            }}
            transition={{
              boxShadow: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background: 'radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, transparent 70%)',
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Icon */}
            <Calendar className="w-5 h-5 text-white relative z-10" />

            {/* Text */}
            <span className="font-semibold text-white relative z-10 whitespace-normal sm:whitespace-nowrap text-sm sm:text-base">
              Book a Demo
            </span>

            {/* Shine effect on hover */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                backgroundSize: '200% 100%',
              }}
              animate={{
                backgroundPosition: ['0% 0%', '200% 0%'],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </motion.button>

          {/* Pulse ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-[#0080FF] pointer-events-none"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut"
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default FloatingCTA
