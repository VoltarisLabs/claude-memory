import { cn } from '../lib/utils'

export const GradientText = ({
  children,
  className = '',
  gradient = 'from-[#0080FF] via-[#4F1AD6] to-[#00F6FF]',
  animate = false,
}) => {
  if (animate) {
    return (
      <span
        className={cn(
          'inline-block bg-gradient-to-r bg-clip-text text-transparent bg-[length:200%_auto]',
          gradient,
          className
        )}
        style={{ animation: 'gradientShift 3s linear infinite' }}
      >
        {children}
        <style>{`
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}</style>
      </span>
    )
  }

  return (
    <span
      className={cn(
        'inline-block bg-gradient-to-r bg-clip-text text-transparent',
        gradient,
        className
      )}
    >
      {children}
    </span>
  )
}

export const ShinyText = ({ children, className = '' }) => {
  return (
    <span
      className={cn(
        'inline-block bg-[length:200%_100%] bg-clip-text text-transparent',
        className
      )}
      style={{
        backgroundImage: 'linear-gradient(90deg, #fff 0%, #0080FF 50%, #fff 100%)',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        animation: 'shimmerText 3s linear infinite',
      }}
    >
      {children}
      <style>{`
        @keyframes shimmerText {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </span>
  )
}

export default GradientText
