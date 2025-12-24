'use client'

import { useEffect, useState, useRef } from 'react'
import { usePathname } from 'next/navigation'

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [isAnimating, setIsAnimating] = useState(false)
  const prevPathnameRef = useRef(pathname)
  const isInitialMount = useRef(true)

  useEffect(() => {
    // Skip animation on initial mount
    if (isInitialMount.current) {
      isInitialMount.current = false
      prevPathnameRef.current = pathname
      return
    }

    // Only animate if pathname changed
    if (prevPathnameRef.current !== pathname) {
      setIsAnimating(true)
      prevPathnameRef.current = pathname
      
      // Reset animation state after transition completes
      const timer = setTimeout(() => {
        setIsAnimating(false)
      }, 400)
      
      return () => clearTimeout(timer)
    }
  }, [pathname])

  return (
    <div 
      className={`page-transition-wrapper ${
        isAnimating ? 'page-transition-exit' : 'page-transition-enter'
      }`}
    >
      {children}
    </div>
  )
}

