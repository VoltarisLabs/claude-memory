import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

// ─── WordReveal: staggered word-by-word entrance ─────────────────────────────
export const WordReveal = ({
  text,
  className = '',
  delay = 0,
  stagger = 0.08,
  trigger = 'mount',
  once = true,
  as: Tag = 'span',
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, amount: 0.3 })
  const words = text.split(' ')

  const shouldAnimate = trigger === 'mount' ? true : isInView

  return (
    <Tag ref={ref} className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.3em]"
          initial={{ opacity: 0, y: 40 }}
          animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{
            duration: 0.5,
            delay: delay + i * stagger,
            ease: [0.215, 0.61, 0.355, 1],
          }}
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  )
}

// ─── FadeUpText: fade up + blur clear (Voltaris signature) ──────────────────
export const FadeUpText = ({
  children,
  className = '',
  delay = 0,
  duration = 0.8,
  y = 20,
  blur = 6,
  trigger = 'mount',
  once = true,
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, amount: 0.3 })

  const shouldAnimate = trigger === 'mount' ? true : isInView

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y, filter: `blur(${blur}px)` }}
      animate={
        shouldAnimate
          ? { opacity: 1, y: 0, filter: 'blur(0px)' }
          : { opacity: 0, y, filter: `blur(${blur}px)` }
      }
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.div>
  )
}

// ─── FloatingElement: continuous gentle Y-axis oscillation ──────────────────
export const FloatingElement = ({
  children,
  className = '',
  amplitude = 8,
  duration = 3,
  delay = 0,
}) => {
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -amplitude, 0] }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.div>
  )
}

// ─── Re-export RevealText from its own file ─────────────────────────────────
export { default as RevealText } from './RevealText'
