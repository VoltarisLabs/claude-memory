import React, { useRef, useState, useCallback, useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion'
import { Loader2, Check, X } from 'lucide-react'

// ─── Size Maps ─────────────────────────────────────────────────────────────────
const sizeMap = {
  sm: 'px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm',
  md: 'px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 text-sm sm:text-base',
  lg: 'px-5 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 text-base sm:text-lg',
  card: 'w-full justify-center px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 text-sm sm:text-base rounded-xl',
}

// ─── Primary Button ────────────────────────────────────────────────────────────
// Magnetic cursor attraction + fluid blob + animated gradient + shine sweep
export const PrimaryButton = ({ children, onClick, className = '', size = 'md', disabled = false }) => {
  const ref = useRef(null)
  const [isHovered, setIsHovered] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [blobSize, setBlobSize] = useState(120)

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springConfig = { stiffness: 150, damping: 15, mass: 0.5 }
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)
  const innerX = useTransform(springX, v => v * -0.3)
  const innerY = useTransform(springY, v => v * -0.3)

  useEffect(() => {
    const updateBlobSize = () => {
      setBlobSize(window.innerWidth < 640 ? 80 : 120)
    }
    updateBlobSize()
    window.addEventListener('resize', updateBlobSize)
    return () => window.removeEventListener('resize', updateBlobSize)
  }, [])

  const handleMouseMove = useCallback((e) => {
    if (!ref.current || disabled) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set((e.clientX - centerX) * 0.35)
    y.set((e.clientY - centerY) * 0.35)
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }, [x, y, disabled])

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
      className={`group relative ${sizeClass} ${roundedClass} font-semibold overflow-hidden flex items-center justify-center gap-2.5 ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
      style={{ x: disabled ? 0 : springX, y: disabled ? 0 : springY }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => !disabled && setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      whileTap={disabled ? {} : { scale: 0.95 }}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      animate={{
        backgroundPosition: isHovered ? '100% 0%' : '0% 0%',
        boxShadow: isHovered
          ? '0 0 20px rgba(0, 128, 255, 0.3)'
          : '0 0 0px rgba(0, 128, 255, 0)',
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
          width: blobSize,
          height: blobSize,
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.15)',
          filter: 'blur(20px)',
          left: mousePos.x - (blobSize / 2),
          top: mousePos.y - (blobSize / 2),
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
  const isCard = size === 'card'
  const roundedClass = isCard ? '' : 'rounded-full'

  return (
    <motion.button
      ref={ref}
      className={`group relative ${sizeClass} ${roundedClass} font-semibold overflow-hidden flex items-center justify-center gap-2.5 text-white border transition-all duration-500 ${isHovered ? 'border-white/20 bg-white/[0.04]' : 'border-white/10'} ${className}`}
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
      className={`group relative px-6 py-3 text-sm rounded-full font-semibold overflow-hidden flex items-center justify-center gap-2 ${fullWidth ? 'w-full' : ''} ${className}`}
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

// ─── Stateful Button ───────────────────────────────────────────────────────────
// Button with loading, success, and error states
export const StatefulButton = ({
  children,
  onClick,
  className = '',
  size = 'md',
  state = 'idle', // 'idle' | 'loading' | 'success' | 'error'
  disabled = false
}) => {
  const ref = useRef(null)
  const [isHovered, setIsHovered] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springConfig = { stiffness: 150, damping: 15, mass: 0.5 }
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)

  const handleMouseMove = useCallback((e) => {
    if (!ref.current || state !== 'idle') return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set((e.clientX - centerX) * 0.35)
    y.set((e.clientY - centerY) * 0.35)
  }, [x, y, state])

  const handleMouseLeave = useCallback(() => {
    x.set(0)
    y.set(0)
    setIsHovered(false)
  }, [x, y])

  const sizeClass = sizeMap[size] || sizeMap.md
  const isCard = size === 'card'
  const roundedClass = isCard ? '' : 'rounded-full'

  const getBackground = () => {
    switch (state) {
      case 'success':
        return 'linear-gradient(90deg, #10b981, #059669)'
      case 'error':
        return 'linear-gradient(90deg, #ef4444, #dc2626)'
      case 'loading':
      case 'idle':
      default:
        return 'linear-gradient(90deg, #0080FF, #4F1AD6, #0080FF)'
    }
  }

  const getIcon = () => {
    switch (state) {
      case 'loading':
        return <Loader2 className="w-5 h-5 animate-spin" />
      case 'success':
        return <Check className="w-5 h-5" />
      case 'error':
        return <X className="w-5 h-5" />
      default:
        return null
    }
  }

  return (
    <motion.button
      ref={ref}
      className={`group relative ${sizeClass} ${roundedClass} font-semibold overflow-hidden flex items-center justify-center gap-2.5 ${className}`}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => state === 'idle' && setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      whileTap={state === 'idle' ? { scale: 0.95 } : {}}
      onClick={state === 'idle' && !disabled ? onClick : undefined}
      disabled={disabled || state !== 'idle'}
      animate={{
        boxShadow: isHovered && state === 'idle'
          ? '0 0 40px rgba(0, 128, 255, 0.4)'
          : '0 0 0px rgba(0, 128, 255, 0)',
      }}
      transition={{ boxShadow: { duration: 0.4 } }}
    >
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: getBackground(),
          backgroundSize: '200% 100%',
        }}
        animate={{
          backgroundPosition: state === 'loading' ? ['0% 0%', '200% 0%'] : '0% 0%'
        }}
        transition={{
          backgroundPosition: {
            duration: 1.5,
            repeat: state === 'loading' ? Infinity : 0,
            ease: 'linear'
          }
        }}
      />

      {/* Content with icon transitions */}
      <motion.span
        className="relative z-10 flex items-center gap-2.5 text-white"
        layout
      >
        <AnimatePresence mode="wait">
          {getIcon() && (
            <motion.span
              key={state}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              transition={{ duration: 0.3 }}
            >
              {getIcon()}
            </motion.span>
          )}
        </AnimatePresence>
        {state === 'idle' && children}
        {state === 'loading' && 'Loading...'}
        {state === 'success' && 'Success!'}
        {state === 'error' && 'Error'}
      </motion.span>

      {/* Ripple effect on success */}
      {state === 'success' && (
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-white"
          initial={{ scale: 0, opacity: 0.8 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 0.6 }}
        />
      )}

      <style>{`
        @keyframes gradientCycle {
          0% { background-position: 0% 0%; }
          100% { background-position: 200% 0%; }
        }
      `}</style>
    </motion.button>
  )
}
