import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    // Prevent browser scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }

    // Force scroll to top immediately
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0

    // Also ensure after render
    const rafId = requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    })

    return () => cancelAnimationFrame(rafId)
  }, [pathname])

  return null
}

export default ScrollToTop
