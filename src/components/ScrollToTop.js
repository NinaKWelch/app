import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// when router link changes, the page scrolls up to top
const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default ScrollToTop
