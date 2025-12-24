'use client'

import { Github, Mail, Linkedin } from 'lucide-react'
import { useState, useEffect } from 'react'
import { format } from 'date-fns'

export default function Footer() {
  const [currentTime, setCurrentTime] = useState('')

  useEffect(() => {
    const updateClock = () => {
      const now = new Date()
      setCurrentTime(format(now, 'HH:mm:ss'))
    }

    updateClock()
    const interval = setInterval(updateClock, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <footer className="border-t border-neon-blue/30 bg-cyber-black/50 backdrop-blur-sm mt-20">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {/* Left: Connect */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <h3 className="font-cyber text-neon-pink text-sm tracking-wider">
              LET'S CONNECT
            </h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-neon-blue transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="text-gray-400 hover:text-neon-green transition-colors duration-300"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-neon-purple transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Center: Clock */}
          <div className="flex flex-col items-center gap-2">
            <div className="font-mono text-3xl text-neon-blue font-bold tracking-wider">
              {currentTime || '00:00:00'}
            </div>
            <div className="font-mono text-xs text-gray-500 uppercase tracking-widest">
              PST
            </div>
          </div>

          {/* Right: Summary */}
          <div className="flex flex-col items-center md:items-end">
            <p className="font-cyber text-neon-green text-sm tracking-wider">
              AI/ML ENTHUSIAST
            </p>
            <p className="font-mono text-xs text-gray-500 mt-1">
              Building the future, one pixel at a time
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-neon-blue/10">
          <p className="text-center font-mono text-xs text-gray-600">
            © {new Date().getFullYear()} Cyber-Retro Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}