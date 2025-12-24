'use client'

import { useEffect, useRef, useState } from 'react'
import anime from 'animejs'

interface HologramProps {
  imageSrc: string
  size?: number
}

export default function Hologram({ imageSrc, size = 300 }: HologramProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [pixelData, setPixelData] = useState<ImageData | null>(null)
  const [gridSize] = useState(8)
  const animationRef = useRef<anime.AnimeInstance | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d', { willReadFrequently: true })
    if (!canvas || !ctx) return

    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.src = imageSrc

    img.onload = () => {
      canvas.width = size
      canvas.height = size
      ctx.imageSmoothingEnabled = false
      
      const tempCanvas = document.createElement('canvas')
      const tempCtx = tempCanvas.getContext('2d')
      if (!tempCtx) return

      const pixelWidth = Math.floor(size / gridSize)
      const pixelHeight = Math.floor(size / gridSize)
      
      tempCanvas.width = pixelWidth
      tempCanvas.height = pixelHeight
      tempCtx.imageSmoothingEnabled = false
      
      tempCtx.drawImage(img, 0, 0, pixelWidth, pixelHeight)
      ctx.drawImage(tempCanvas, 0, 0, pixelWidth, pixelHeight, 0, 0, size, size)
      
      const imageData = ctx.getImageData(0, 0, size, size)
      setPixelData(imageData)
    }

    img.onerror = () => {
      const gradient = ctx.createLinearGradient(0, 0, size, size)
      gradient.addColorStop(0, '#00f0ff')
      gradient.addColorStop(0.5, '#ff006e')
      gradient.addColorStop(1, '#b026ff')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, size, size)
    }
  }, [imageSrc, size, gridSize])

  const handleMouseEnter = () => {
    if (!containerRef.current || animationRef.current) return

    const pixels = containerRef.current.querySelectorAll('.pixel')
    
    animationRef.current = anime({
      targets: pixels,
      translateX: () => anime.random(-2, 2),
      translateY: () => anime.random(-2, 2),
      opacity: () => anime.random(0.7, 1),
      duration: 100,
      easing: 'easeOutQuad',
      delay: anime.stagger(5, { from: 'center' }),
    })
  }

  const handleMouseLeave = () => {
    if (!containerRef.current) return

    const pixels = containerRef.current.querySelectorAll('.pixel')
    
    if (animationRef.current) {
      animationRef.current.pause()
    }

    animationRef.current = anime({
      targets: pixels,
      translateX: 0,
      translateY: 0,
      opacity: 1,
      duration: 300,
      easing: 'easeInOutQuad',
    })
  }

  const renderPixelGrid = () => {
    if (!pixelData) return null

    const pixels = []
    const cols = Math.floor(size / gridSize)
    const rows = Math.floor(size / gridSize)

    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const pixelX = x * gridSize
        const pixelY = y * gridSize
        const index = (pixelY * size + pixelX) * 4

        const r = pixelData.data[index]
        const g = pixelData.data[index + 1]
        const b = pixelData.data[index + 2]
        const a = pixelData.data[index + 3] / 255

        pixels.push(
          <div
            key={`${x}-${y}`}
            className="pixel absolute"
            style={{
              left: `${x * gridSize}px`,
              top: `${y * gridSize}px`,
              width: `${gridSize}px`,
              height: `${gridSize}px`,
              backgroundColor: `rgba(${r}, ${g}, ${b}, ${a})`,
            }}
          />
        )
      }
    }

    return pixels
  }

  return (
    <div className="relative">
      <canvas
        ref={canvasRef}
        className="hidden"
        width={size}
        height={size}
      />
      
      <div
        ref={containerRef}
        className="relative cursor-pointer"
        style={{ width: `${size}px`, height: `${size}px` }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {pixelData && renderPixelGrid()}
        
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/20 via-transparent to-neon-pink/20 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-neon-green/10 via-transparent to-neon-purple/10 mix-blend-overlay animate-pulse-glow"></div>
        </div>
        
        <div className="absolute inset-0 pointer-events-none opacity-20">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-full h-px bg-neon-blue"
              style={{ top: `${i * 5}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}