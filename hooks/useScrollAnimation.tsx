'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'

interface ScrollAnimationOptions {
  threshold?: number
  triggerOnce?: boolean
  rootMargin?: string
}

export function useScrollAnimation(options: ScrollAnimationOptions = {}) {
  const {
    threshold = 0.1,
    triggerOnce = true,
    rootMargin = '0px 0px -100px 0px',
  } = options

  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
    rootMargin,
  })

  return { ref, inView }
}

// Hook for parallax effect
export function useParallax() {
  const [offsetY, setOffsetY] = useState(0)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect()
        const scrolled = window.pageYOffset
        const rate = scrolled * 0.5
        setOffsetY(rate)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return { elementRef, offsetY }
}

// Hook for staggered animations
export function useStaggerAnimation(itemCount: number, baseDelay: number = 0.1) {
  return Array.from({ length: itemCount }, (_, i) => ({
    delay: i * baseDelay,
  }))
}