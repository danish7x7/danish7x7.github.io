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

      </motion.div>

      {/* Optional: Simple floor reflection (Remove if you want zero extra effects) */}
      <div 
        className="absolute bottom-0 w-3/4 h-4 bg-neon-blue blur-xl opacity-30 rounded-[100%]"
      />
    </div>
  )
}