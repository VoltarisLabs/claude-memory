import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const AnimatedCounter = ({
  value,
  suffix = '',
  duration = 2000,
  className = '',
  showPlusSign = false
}) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const numericValue = parseFloat(value)

  useEffect(() => {
    if (!isInView) return
    const startTime = performance.now()
    const step = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      // Enhanced easing function for smooth acceleration
      const eased = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(eased * numericValue))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [isInView, numericValue, duration])

  return (
    <motion.span
      ref={ref}
      className={`inline-block ${className}`}
      initial={{ opacity: 0, scale: 0.5, filter: 'blur(10px)' }}
      animate={isInView ? {
        opacity: 1,
        scale: 1,
        filter: 'blur(0px)',
      } : {}}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {showPlusSign && count > 0 && '+'}
      {count}
      {suffix}
    </motion.span>
  )
}

export default AnimatedCounter
