'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState, useRef } from 'react'

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [displayChildren, setDisplayChildren] = useState(children)
  const prevPathnameRef = useRef(pathname)
  const isInitialMount = useRef(true)

  useEffect(() => {
    // Skip transition on initial mount
    if (isInitialMount.current) {
      isInitialMount.current = false
      setDisplayChildren(children)
      prevPathnameRef.current = pathname
      return
    }

    // Only trigger transition if pathname actually changed
    if (prevPathnameRef.current !== pathname) {
      // Start exit transition
      setIsTransitioning(true)
      
      // After exit animation completes, update content
      const exitTimer = setTimeout(() => {
        setDisplayChildren(children)
        prevPathnameRef.current = pathname
        
        // Small delay to ensure DOM update, then trigger enter animation
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setIsTransitioning(false)
          })
        })
      }, 300) // Exit duration

      return () => clearTimeout(exitTimer)
    }
  }, [pathname, children])

  return (
    <div
      className={`page-transition-wrapper ${
        isTransitioning ? 'page-transition-exit' : 'page-transition-enter'
      }`}
    >
      {displayChildren}
    </div>
  )
}

