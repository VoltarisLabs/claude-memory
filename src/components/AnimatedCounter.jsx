import { useState, useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'

const AnimatedCounter = ({ value, suffix = '', duration = 2000 }) => {
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
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * numericValue))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [isInView, numericValue, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

export default AnimatedCounter
