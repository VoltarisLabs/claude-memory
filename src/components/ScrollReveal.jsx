import { motion } from 'framer-motion'
import {
  fadeInUp,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  slideInBlur,
  viewportConfig
} from '../utils/scrollAnimations'

/**
 * ScrollReveal - A reusable component for scroll-triggered animations
 *
 * @param {string} animation - Type of animation ('fadeUp', 'fadeDown', 'fadeLeft', 'fadeRight', 'scale', 'blur')
 * @param {number} delay - Delay before animation starts (in seconds)
 * @param {number} duration - Animation duration (in seconds)
 * @param {ReactNode} children - Content to animate
 * @param {string} className - Additional CSS classes
 */
const ScrollReveal = ({
  children,
  animation = 'fadeUp',
  delay = 0,
  duration = 0.6,
  className = '',
  viewport = viewportConfig,
  ...props
}) => {
  const animations = {
    fadeUp: fadeInUp,
    fadeDown: fadeInDown,
    fadeLeft: fadeInLeft,
    fadeRight: fadeInRight,
    scale: scaleIn,
    blur: slideInBlur,
  }

  const selectedAnimation = animations[animation] || fadeInUp

  // Override transition timing if custom values provided
  const customAnimation = {
    ...selectedAnimation,
    visible: {
      ...selectedAnimation.visible,
      transition: {
        ...selectedAnimation.visible.transition,
        delay,
        duration,
      },
    },
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={customAnimation}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default ScrollReveal
