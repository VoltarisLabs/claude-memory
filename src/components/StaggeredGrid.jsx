import { motion } from 'framer-motion'
import { staggerContainer, progressiveReveal, viewportConfig } from '../utils/scrollAnimations'

/**
 * StaggeredGrid - Grid container with staggered children animations
 * Perfect for feature cards, testimonials, or any grid of items
 *
 * @param {ReactNode} children - Grid items to animate
 * @param {string} className - Additional CSS classes
 * @param {number} staggerDelay - Delay between each child animation (in seconds)
 */
const StaggeredGrid = ({
  children,
  className = '',
  staggerDelay = 0.1,
  viewport = viewportConfig,
}) => {
  const customStagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.2,
      },
    },
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={customStagger}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/**
 * StaggeredItem - Individual item wrapper for use within StaggeredGrid
 * Automatically animates when parent grid comes into view
 */
export const StaggeredItem = ({ children, className = '', index = 0 }) => {
  return (
    <motion.div
      variants={progressiveReveal}
      custom={index}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default StaggeredGrid
