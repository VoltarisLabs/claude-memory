import { motion } from 'framer-motion'

const Badge = ({
  children,
  variant = 'blue',
  size = 'md',
  icon: Icon,
  animated = true,
  dot = false,
  pulse = false,
  uppercase = false,
  className = ''
}) => {
  // Size variations
  const sizes = {
    sm: 'px-3 py-1 text-xs',
    md: 'px-4 py-1.5 text-sm',
    lg: 'px-5 py-2 text-base'
  }

  // Variant styles (more visible and unified)
  const variants = {
    blue: 'bg-[#0080FF]/15 border-[#0080FF]/30 text-[#0080FF]',
    purple: 'bg-[#4F1AD6]/15 border-[#4F1AD6]/30 text-[#4F1AD6]',
    gradient: 'bg-gradient-to-r from-[#0080FF]/15 to-[#4F1AD6]/15 border-[#0080FF]/30 text-[#0080FF]',
    white: 'bg-white/10 border-white/30 text-white',
    subtle: 'bg-white/5 border-white/20 text-white/80'
  }

  const baseClasses = `
    inline-flex items-center gap-2 rounded-full border backdrop-blur-sm
    font-medium transition-all duration-300
    hover:scale-105 hover:shadow-lg
    ${sizes[size]}
    ${variants[variant]}
    ${uppercase ? 'uppercase tracking-wider' : ''}
    ${className}
  `.trim().replace(/\s+/g, ' ')

  const content = (
    <>
      {/* Gradient dot */}
      {dot && (
        <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] flex-shrink-0" />
      )}

      {/* Pulse indicator */}
      {pulse && (
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
      )}

      {/* Icon */}
      {Icon && <Icon className="w-4 h-4 flex-shrink-0" />}

      {/* Text content */}
      <span>{children}</span>
    </>
  )

  if (animated) {
    return (
      <motion.div
        className={baseClasses}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, type: 'spring', stiffness: 200 }}
      >
        {content}
      </motion.div>
    )
  }

  return <div className={baseClasses}>{content}</div>
}

export default Badge
