'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSkillsClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === '/') {
      e.preventDefault()
      const skillsSection = document.getElementById('skills')
      if (skillsSection) {
        skillsSection.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-cyber-black/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="font-cyber text-2xl font-bold text-neon-blue hover:text-neon-pink transition-colors duration-300"
          >
            <span className="inline-block hover:animate-glitch">DEV</span>
          </Link>

          <div className="flex items-center gap-8">
            {pathname === '/' ? (
              <a
                href="#skills"
                onClick={handleSkillsClick}
                className="font-mono text-sm text-gray-300 hover:text-neon-green transition-colors duration-300 relative group"
              >
                Skills
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-green group-hover:w-full transition-all duration-300"></span>
              </a>
            ) : (
              <Link
                href="/#skills"
                className="font-mono text-sm text-gray-300 hover:text-neon-green transition-colors duration-300 relative group"
              >
                Skills
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-green group-hover:w-full transition-all duration-300"></span>
              </Link>
            )}

            <Link
              href="/projects"
              className={`font-mono text-sm transition-colors duration-300 relative group ${
                pathname === '/projects' ? 'text-neon-blue' : 'text-gray-300 hover:text-neon-blue'
              }`}
            >
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-blue group-hover:w-full transition-all duration-300"></span>
            </Link>

            <Link
              href="/about"
              className={`font-mono text-sm transition-colors duration-300 relative group ${
                pathname === '/about' ? 'text-neon-pink' : 'text-gray-300 hover:text-neon-pink'
              }`}
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-pink group-hover:w-full transition-all duration-300"></span>
            </Link>

            <Link
              href="/contact"
              className={`font-mono text-sm transition-colors duration-300 relative group ${
                pathname === '/contact' ? 'text-neon-purple' : 'text-gray-300 hover:text-neon-purple'
              }`}
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-purple group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
