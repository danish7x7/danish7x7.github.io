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
            // "screen" blend mode hides the black background pixels
            mixBlendMode: 'screen', 
            // We removed drop-shadow to stop the "square glow" effect.
            // Brightness(1.2) makes the internal neon colors pop more.
            filter: 'brightness(1.2)', 
          }}
        />
        
        <div 
          className="absolute inset-0 pointer-events-none mix-blend-overlay"
          style={{
            background: 'linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(0, 255, 255, 0.1) 50%), linear-gradient(90deg, rgba(255,0,0,0.06), rgba(0,255,0,0.02), rgba(0,0,255,0.06))',
            backgroundSize: '100% 4px, 3px 100%',
          }}
        />
      </motion.div>

      {/* Optional: Simple floor reflection (Remove if you want zero extra effects) */}
      <div 
        className="absolute bottom-0 w-3/4 h-4 bg-neon-blue blur-xl opacity-30 rounded-[100%]"
      />
    </div>
  )
}