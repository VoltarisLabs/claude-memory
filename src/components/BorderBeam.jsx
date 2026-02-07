/**
 * BorderBeam — Animated gradient beam orbiting the card border
 * Adapted from website-design-2026 pattern (offset-path + mask-composite)
 */
const BorderBeam = ({
  className = '',
  size = 150,
  duration = 12,
  borderWidth = 1.5,
  colorFrom = '#0080FF',
  colorTo = '#60a5fa',
  delay = 0,
}) => (
  <div
    className={`pointer-events-none absolute inset-0 rounded-[inherit] ${className}`}
    style={{
      WebkitMask:
        'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
      WebkitMaskComposite: 'xor',
      mask:
        'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
      maskComposite: 'exclude',
      padding: borderWidth,
    }}
  >
    <div
      className="absolute aspect-square"
      style={{
        width: size,
        background: `linear-gradient(to left, ${colorFrom}, ${colorTo}, transparent)`,
        offsetPath: 'rect(0 auto auto 0 round 16px)',
        offsetAnchor: `${size}px 50%`,
        animation: `borderBeamOrbit ${duration}s infinite linear`,
        animationDelay: `-${delay}s`,
      }}
    />
    <style>{`
      @keyframes borderBeamOrbit {
        100% { offset-distance: 100%; }
      }
    `}</style>
  </div>
)

export default BorderBeam
