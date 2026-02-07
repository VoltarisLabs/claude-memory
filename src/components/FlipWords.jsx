import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '../lib/utils'

const FlipWords = ({
  words,
  className = '',
  duration = 3000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length)
    }, duration)

    return () => clearInterval(interval)
  }, [words.length, duration])

  return (
    <span className={cn('relative inline-block overflow-hidden align-bottom', className)}>
      <AnimatePresence mode="wait">
        <motion.span
          key={words[currentIndex]}
          className="inline-block"
          initial={{ y: '100%', opacity: 0, filter: 'blur(8px)' }}
          animate={{ y: '0%', opacity: 1, filter: 'blur(0px)' }}
          exit={{ y: '-100%', opacity: 0, filter: 'blur(8px)' }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          {words[currentIndex]}
        </motion.span>
      </AnimatePresence>
      {/* Invisible placeholder for layout */}
      <span className="invisible">{words.reduce((a, b) => (a.length >= b.length ? a : b), '')}</span>
    </span>
  )
}

export default FlipWords
