import { useEffect, useRef, useState } from 'react'
import { cn } from '../lib/utils'

const InfiniteScroll = ({
  children,
  className = '',
  direction = 'left',
  speed = 'normal',
  pauseOnHover = true,
}) => {
  const scrollerRef = useRef(null)
  const [start, setStart] = useState(false)

  useEffect(() => {
    if (!scrollerRef.current) return

    const scrollerContent = Array.from(scrollerRef.current.children)

    // Duplicate items for seamless loop
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true)
      scrollerRef.current?.appendChild(duplicatedItem)
    })

    setStart(true)
  }, [])

  const speedDuration = {
    slow: '60s',
    normal: '40s',
    fast: '20s',
  }

  return (
    <div
      className={cn(
        'relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]',
        className
      )}
    >
      <div
        ref={scrollerRef}
        className={cn(
          'flex gap-4 w-max',
          start && 'animate-scroll',
          pauseOnHover && 'hover:[animation-play-state:paused]'
        )}
        style={{
          '--animation-duration': speedDuration[speed],
          '--animation-direction': direction === 'left' ? 'forwards' : 'reverse',
        }}
      >
        {children}
      </div>
    </div>
  )
}

export default InfiniteScroll
