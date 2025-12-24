'use client'

import { useState, useRef, MouseEvent } from 'react'

interface PokemonCardProps {
  title: string
  description: string
  icon: string
}

export default function PokemonCard({ title, description, icon }: PokemonCardProps) {
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const card = cardRef.current
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = (y - centerY) / 10
    const rotateY = (centerX - x) / 10

    setRotation({ x: rotateX, y: rotateY })
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setRotation({ x: 0, y: 0 })
  }

  return (
    <div className="perspective-1000">
      <div
        ref={cardRef}
        className={`relative w-72 h-96 transition-all duration-300 ease-out ${
          isHovered ? 'scale-105' : 'scale-100'
        }`}
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transformStyle: 'preserve-3d',
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={`w-full h-full bg-gradient-to-br from-cyber-dark via-cyber-black to-cyber-dark rounded-lg overflow-hidden transition-all duration-300 ${
            isHovered
              ? 'shadow-[0_0_40px_rgba(0,240,255,0.6),0_0_60px_rgba(255,0,110,0.4)]'
              : 'shadow-[0_0_20px_rgba(0,240,255,0.3)]'
          }`}
          style={{
            border: '4px solid',
            borderImage: 'repeating-linear-gradient(45deg, #00f0ff 0, #00f0ff 10px, #ff006e 10px, #ff006e 20px) 4',
            imageRendering: 'pixelated',
          }}
        >
          <div
            className={`absolute inset-0 bg-gradient-to-br from-neon-blue/30 via-transparent to-neon-pink/30 mix-blend-overlay transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-50'
            }`}
            style={{
              transform: `translateX(${rotation.y * 2}px) translateY(${rotation.x * 2}px)`,
            }}
          />

          <div className="relative z-10 p-6 h-full flex flex-col items-center justify-between">
            <div className="w-full flex justify-center items-center flex-1">
              <div className={`text-8xl transition-transform duration-300 ${
                isHovered ? 'scale-110' : 'scale-100'
              }`}>
                {icon}
              </div>
            </div>

            <div className="w-full text-center space-y-3 pb-4">
              <h3 className="font-pixel text-neon-blue text-sm tracking-wider">
                {title}
              </h3>
              <p className="font-mono text-gray-300 text-xs leading-relaxed">
                {description}
              </p>
            </div>

            <div className="absolute top-4 left-4 w-3 h-3 bg-neon-green"></div>
            <div className="absolute top-4 right-4 w-3 h-3 bg-neon-pink"></div>
            <div className="absolute bottom-4 left-4 w-3 h-3 bg-neon-purple"></div>
            <div className="absolute bottom-4 right-4 w-3 h-3 bg-neon-yellow"></div>
          </div>

          <div className="absolute inset-0 pointer-events-none opacity-10">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="absolute w-full h-px bg-white"
                style={{ top: `${i * 3.33}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}