import { motion } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'

/**
 * SpaceLines — Scattered subtle gradient lines at various angles
 * Gives a spacey, futuristic depth feel to the background
 */
const SpaceLines = ({ lineColor = '#0080FF' }) => {
  const prefersReducedMotion = useReducedMotion()
  const lines = [
    // { top, left, width, rotation, opacity, duration, delay }
    { top: '8%', left: '5%', w: 180, rot: 35, op: 0.07, dur: 8, del: 0 },
    { top: '15%', left: '75%', w: 220, rot: -20, op: 0.05, dur: 10, del: 1 },
    { top: '25%', left: '40%', w: 140, rot: 55, op: 0.06, dur: 9, del: 2 },
    { top: '35%', left: '85%', w: 160, rot: -45, op: 0.08, dur: 7, del: 0.5 },
    { top: '45%', left: '10%', w: 200, rot: 15, op: 0.05, dur: 11, del: 3 },
    { top: '55%', left: '60%', w: 130, rot: -65, op: 0.07, dur: 8, del: 1.5 },
    { top: '65%', left: '25%', w: 170, rot: 40, op: 0.06, dur: 10, del: 2.5 },
    { top: '75%', left: '70%', w: 190, rot: -30, op: 0.05, dur: 9, del: 0.8 },
    { top: '85%', left: '15%', w: 150, rot: -50, op: 0.07, dur: 8, del: 1.8 },
    { top: '92%', left: '50%', w: 210, rot: 25, op: 0.04, dur: 12, del: 3.5 },
    { top: '12%', left: '55%', w: 120, rot: 70, op: 0.06, dur: 9, del: 4 },
    { top: '48%', left: '90%', w: 160, rot: -15, op: 0.05, dur: 10, del: 2.2 },
  ]

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {lines.map((line, i) => (
        prefersReducedMotion ? (
          <div
            key={i}
            className="absolute h-px"
            style={{
              top: line.top,
              left: line.left,
              width: line.w,
              transform: `rotate(${line.rot}deg)`,
              background: `linear-gradient(90deg, transparent, ${lineColor}, transparent)`,
              opacity: line.op,
            }}
          />
        ) : (
          <motion.div
            key={i}
            className="absolute h-px"
            style={{
              top: line.top,
              left: line.left,
              width: line.w,
              transform: `rotate(${line.rot}deg)`,
              background: `linear-gradient(90deg, transparent, ${lineColor}, transparent)`,
            }}
            animate={{
              opacity: [0, line.op, 0],
            }}
            transition={{
              duration: line.dur,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: line.del,
            }}
          />
        )
      ))}
    </div>
  )
}

export default SpaceLines
