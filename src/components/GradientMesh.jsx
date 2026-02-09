import React from 'react'
import { motion } from 'framer-motion'

const GradientMesh = ({ variant = 'default', intensity = 'low' }) => {
  // Intensity levels control opacity
  const opacityMap = {
    low: 0.15,
    medium: 0.25,
    high: 0.35
  }

  const opacity = opacityMap[intensity] || opacityMap.low

  // Different color schemes for different sections
  const variants = {
    // Blue theme - for hero, general sections
    default: [
      { color: 'bg-blue-500', size: 'w-96 h-96', position: '-top-48 -right-48', duration: 18 },
      { color: 'bg-cyan-500', size: 'w-80 h-80', position: 'top-1/4 -left-40', duration: 22 },
      { color: 'bg-blue-600', size: 'w-72 h-72', position: 'bottom-20 right-20', duration: 20 },
    ],
    // Purple accent - for pricing, CTA sections
    purple: [
      { color: 'bg-purple-500', size: 'w-96 h-96', position: '-top-40 -right-40', duration: 16 },
      { color: 'bg-blue-500', size: 'w-80 h-80', position: 'bottom-10 -left-40', duration: 20 },
      { color: 'bg-indigo-500', size: 'w-64 h-64', position: 'top-1/3 right-1/4', duration: 24 },
    ],
    // Minimal - for sections with lots of text
    minimal: [
      { color: 'bg-blue-500', size: 'w-64 h-64', position: '-top-32 -right-32', duration: 20 },
      { color: 'bg-cyan-500', size: 'w-56 h-56', position: 'bottom-0 -left-32', duration: 25 },
    ],
  }

  const blobs = variants[variant] || variants.default

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {blobs.map((blob, index) => (
        <motion.div
          key={index}
          className={`absolute ${blob.size} ${blob.color} rounded-full blur-3xl`}
          style={{ opacity }}
          animate={{
            x: [0, 60, 0],
            y: [0, 80, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: index * 2, // Stagger the animations
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity }}
          viewport={{ once: true }}
        />
      ))}
    </div>
  )
}

export default GradientMesh
