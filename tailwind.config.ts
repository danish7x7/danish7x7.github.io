import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'cyber-black': '#0a0a0f',
        'cyber-dark': '#1a1a2e',
        'neon-blue': '#00f0ff',
        'neon-pink': '#ff006e',
        'neon-green': '#39ff14',
        'neon-purple': '#b026ff',
        'neon-yellow': '#ffea00',
      },
      fontFamily: {
        'pixel': ['"Press Start 2P"', 'cursive'],
        'cyber': ['"Orbitron"', 'sans-serif'],
        'mono': ['"Space Mono"', 'monospace'],
      },
      animation: {
        'glitch': 'glitch 1s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        'pulse-glow': {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(0, 240, 255, 0.5)',
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(0, 240, 255, 0.8), 0 0 60px rgba(255, 0, 110, 0.6)',
          },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}

export default config