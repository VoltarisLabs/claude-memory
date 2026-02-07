import React, { useRef, useState, useCallback } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

// ─── Size Maps ─────────────────────────────────────────────────────────────────
const sizeMap = {
  sm: 'px-4 sm:px-6 py-2 sm:py-2.5 text-sm',
  md: 'px-5 sm:px-8 py-3 sm:py-4 text-sm sm:text-base',
  lg: 'px-6 sm:px-10 py-3.5 sm:py-5 text-base sm:text-lg',
  card: 'w-full py-4 text-lg rounded-xl',
}

// ─── Primary Button ────────────────────────────────────────────────────────────
// Magnetic cursor attraction + fluid blob + animated gradient + shine sweep
export const PrimaryButton = ({ children, onClick, className = '', size = 'md' }) => {
  const ref = useRef(null)
  const [isHovered, setIsHovered] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springConfig = { stiffness: 150, damping: 15, mass: 0.5 }
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)
  const innerX = useTransform(springX, v => v * -0.3)
  const innerY = useTransform(springY, v => v * -0.3)

  const handleMouseMove = useCallback((e) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set((e.clientX - centerX) * 0.35)
    y.set((e.clientY - centerY) * 0.35)
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }, [x, y])

  const handleMouseLeave = useCallback(() => {
    x.set(0)
    y.set(0)
    setIsHovered(false)
  }, [x, y])

  const sizeClass = sizeMap[size] || sizeMap.md
  const isCard = size === 'card'
  const roundedClass = isCard ? '' : 'rounded-full'

  return (
    <motion.button
      ref={ref}
      className={`group relative ${sizeClass} ${roundedClass} font-semibold overflow-hidden font-['Urbanist'] flex items-center justify-center gap-2.5 ${className}`}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      animate={{
        backgroundPosition: isHovered ? '100% 0%' : '0% 0%',
        boxShadow: isHovered ? '0 0 40px rgba(0, 128, 255, 0.4)' : '0 0 0px rgba(0, 128, 255, 0)',
      }}
      transition={{ backgroundPosition: { duration: 1.5, ease: 'linear' }, boxShadow: { duration: 0.4 } }}
      initial={{ backgroundPosition: '0% 0%' }}
    >
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, #0080FF, #4F1AD6, #0080FF)',
          backgroundSize: '200% 100%',
          animation: 'gradientCycle 3s linear infinite',
        }}
      />

      {/* Fluid blob */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          width: 120,
          height: 120,
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.15)',
          filter: 'blur(20px)',
          left: mousePos.x - 60,
          top: mousePos.y - 60,
        }}
        animate={{ scale: isHovered ? 1 : 0, opacity: isHovered ? 1 : 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      />

      {/* Shine sweep */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 pointer-events-none"
        initial={{ x: '-150%' }}
        animate={{ x: isHovered ? '150%' : '-150%' }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      />

      {/* Inner content with parallax */}
      <motion.span
        className="relative z-10 flex items-center gap-2.5 text-white"
        style={{ x: innerX, y: innerY }}
      >
        {children}
      </motion.span>

      <style>{`
        @keyframes gradientCycle {
          0% { background-position: 0% 0%; }
          100% { background-position: 200% 0%; }
        }
      `}</style>
    </motion.button>
  )
}

// ─── Outline Button ────────────────────────────────────────────────────────────
// Reduced magnetic effect + white outline + glass fill on hover
export const OutlineButton = ({ children, onClick, className = '', size = 'md' }) => {
  const ref = useRef(null)
  const [isHovered, setIsHovered] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springConfig = { stiffness: 150, damping: 15, mass: 0.5 }
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)
  const innerX = useTransform(springX, v => v * -0.3)
  const innerY = useTransform(springY, v => v * -0.3)

  const handleMouseMove = useCallback((e) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set((e.clientX - centerX) * 0.2)
    y.set((e.clientY - centerY) * 0.2)
  }, [x, y])

  const handleMouseLeave = useCallback(() => {
    x.set(0)
    y.set(0)
    setIsHovered(false)
  }, [x, y])

  const sizeClass = sizeMap[size] || sizeMap.md

  return (
    <motion.button
      ref={ref}
      className={`group relative ${sizeClass} rounded-full font-semibold overflow-hidden font-['Urbanist'] flex items-center justify-center gap-2.5 text-white border transition-all duration-500 ${isHovered ? 'border-white/20 bg-white/[0.04]' : 'border-white/10'} ${className}`}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.03 }}
      onClick={onClick}
    >
      {/* Shine sweep */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 pointer-events-none"
        initial={{ x: '-150%' }}
        animate={{ x: isHovered ? '150%' : '-150%' }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      />

      {/* Inner content with parallax */}
      <motion.span
        className="relative z-10 flex items-center gap-2.5"
        style={{ x: innerX, y: innerY }}
      >
        {children}
      </motion.span>
    </motion.button>
  )
}

// ─── Nav Button ────────────────────────────────────────────────────────────────
// No magnetic effect (fixed header safe) + animated gradient + shine sweep
export const NavButton = ({ children, onClick, className = '', fullWidth = false }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.button
      className={`group relative px-6 py-2.5 text-sm rounded-full font-semibold overflow-hidden font-['Urbanist'] flex items-center justify-center gap-2 ${fullWidth ? 'w-full' : ''} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(0, 128, 255, 0.3)' }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, #0080FF, #4F1AD6, #0080FF)',
          backgroundSize: '200% 100%',
          animation: 'gradientCycleNav 3s linear infinite',
        }}
      />

      {/* Shine sweep */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 pointer-events-none"
        initial={{ x: '-150%' }}
        animate={{ x: isHovered ? '150%' : '-150%' }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      />

      <span className="relative z-10 text-white">{children}</span>

      <style>{`
        @keyframes gradientCycleNav {
          0% { background-position: 0% 0%; }
          100% { background-position: 200% 0%; }
        }
      `}</style>
    </motion.button>
  )
}
