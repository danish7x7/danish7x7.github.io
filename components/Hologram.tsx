'use client'

import { motion } from 'framer-motion'

interface HologramProps {
  imageSrc: string
  size?: number
}

export default function Hologram({ imageSrc, size = 300 }: HologramProps) {
  return (
    <div 
      className="relative flex justify-center items-center"
      style={{ width: size, height: size }}
    >
      <motion.div
        className="relative z-10 w-full h-full"
        initial={{ y: 0 }}
        animate={{ 
          y: [-15, 15, -15], // Floating movement
          opacity: [0.9, 1, 0.9] // Subtle pulsing
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      >
        <img
          src={imageSrc}
          alt="Hologram"
          className="w-full h-full object-contain"
          style={{
            // This creates the Blue & Pink retro glow
            filter: 'drop-shadow(0 0 15px rgba(0, 240, 255, 0.7)) drop-shadow(5px 5px 30px rgba(255, 0, 110, 0.5)) brightness(1.2)',
          }}
        />
        
        {/* Holographic Overlay / Scanlines Effect */}
        <div 
          className="absolute inset-0 pointer-events-none mix-blend-overlay"
          style={{
            background: 'linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(0, 255, 255, 0.1) 50%), linear-gradient(90deg, rgba(255,0,0,0.06), rgba(0,255,0,0.02), rgba(0,0,255,0.06))',
            backgroundSize: '100% 4px, 3px 100%',
          }}
        />
      </motion.div>

      {/* Floor Glow Reflection */}
      <div 
        className="absolute bottom-0 w-3/4 h-4 bg-neon-blue blur-xl opacity-30 rounded-[100%]"
      />
    </div>
  )
}