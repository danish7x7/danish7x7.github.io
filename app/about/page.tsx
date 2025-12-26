'use client'

import { motion } from 'framer-motion'
import PokemonCard from '@/components/PokemonCard'
import { Music, Play, Code, Palette, Cpu } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function About() {
  const codingSongs = [
    { title: 'Synthetic Dreams', artist: 'Cyber Collective', duration: '3:45' },
    { title: 'Digital Horizons', artist: 'Neon Pulse', duration: '4:12' },
    { title: 'Code Matrix', artist: 'Binary Beats', duration: '3:58' },
    { title: 'Neural Networks', artist: 'AI Symphony', duration: '5:03' },
  ]

  const quickFacts = [
    { label: 'Favorite Language', value: 'TypeScript', icon: Code },
    { label: 'Coffee Per Day', value: '∞ cups', icon: Palette },
    { label: 'Favorite IDE', value: 'VS Code + Vim', icon: Code },
    { label: 'Hours Coding', value: '10,000+', icon: Cpu },
    { label: 'GitHub Streak', value: '365 days', icon: Code },
    { label: 'Favorite Framework', value: 'Next.js', icon: Palette },
  ]

  return (
    <div className="min-h-screen bg-cyber-black">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 refined-grid opacity-20"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-neon-pink/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto relative z-10"
        >
          <div className="inline-block mb-6 px-4 py-2 glass-morphism rounded-full">
            <span className="text-neon-pink font-mono text-sm">Get to know me</span>
          </div>
          
          <h1 className="font-cyber text-5xl md:text-7xl mb-6">
            <span className="text-gradient-pink">About Me</span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-2xl font-mono leading-relaxed">
            Beyond the code, there's a person who loves music, gaming, and collecting memories.
          </p>
        </motion.div>
      </section>

      {/* Bio Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <BioCard />
        </div>
      </section>

      {/* Spotify Section */}
      <section className="py-20 px-6">
        <SpotifySection songs={codingSongs} />
      </section>

      {/* Pokemon Cards Section */}
      <section className="py-20 px-6">
        <HobbiesSection />
      </section>

      {/* Quick Facts */}
      <section className="py-20 px-6">
        <QuickFactsSection facts={quickFacts} />
      </section>
    </div>
  )
}

// Bio Card Component
function BioCard() {
  const { ref, inView } = useScrollAnimation()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/20 via-neon-purple/20 to-neon-pink/20 blur-3xl"></div>
      <div className="relative glass-morphism rounded-2xl p-8 md:p-12 border border-white/10">
        <h2 className="font-cyber text-3xl text-gradient-blue mb-6">
          Hi, I'm [Your Name] 👋
        </h2>
        <div className="space-y-4 font-mono text-gray-300 text-lg leading-relaxed">
          <p>
            I'm a full-stack developer and AI/ML enthusiast passionate about building
            innovative solutions that push the boundaries of what's possible with technology.
            My journey started with a fascination for how computers think, and it's evolved
            into a career dedicated to making intelligent systems more accessible and useful.
          </p>
          <p>
            When I'm not coding, you'll find me exploring virtual worlds, hunting for
            rare Pokémon cards, or listening to synthwave while brainstorming my next project.
            I believe the best work happens at the intersection of creativity and logic.
          </p>
          <p>
            Currently, I'm diving deep into multimodal AI systems, neural network optimization,
            and building experiences that feel like they're from the future. Let's create
            something amazing together!
          </p>
        </div>
      </div>
    </motion.div>
  )
}

// Spotify Section Component
function SpotifySection({ songs }: { songs: any[] }) {
  const { ref, inView } = useScrollAnimation()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="max-w-2xl mx-auto"
    >
      <div className="text-center mb-12">
        <div className="inline-block px-4 py-2 glass-morphism rounded-full mb-4">
          <span className="text-neon-green font-mono text-sm">Now Playing</span>
        </div>
        <h2 className="font-cyber text-3xl md:text-4xl text-gradient-green mb-4">
          Coding Soundtrack
        </h2>
      </div>

      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-green/20 to-emerald-500/20 blur-3xl"></div>
        <div className="relative glass-morphism rounded-2xl p-8 border border-neon-green/30">
          {/* Header */}
          <div className="flex items-center gap-4 mb-6 pb-6 border-b border-neon-green/20">
            <div className="w-16 h-16 bg-gradient-to-br from-neon-green to-emerald-500 rounded-lg flex items-center justify-center">
              <Music size={32} className="text-cyber-black" />
            </div>
            <div>
              <p className="font-mono text-xs text-gray-400 uppercase tracking-wider">
                Active Playlist
              </p>
              <h3 className="font-cyber text-xl text-neon-green">
                My Coding Playlist
              </h3>
            </div>
          </div>

          {/* Song List */}
          <div className="space-y-3">
            {songs.map((song, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 p-4 bg-cyber-black/30 rounded-lg hover:bg-cyber-black/50 transition-all duration-300 group cursor-pointer border border-transparent hover:border-neon-green/30"
              >
                <div className="w-10 h-10 bg-neon-green/20 rounded flex items-center justify-center group-hover:bg-neon-green group-hover:scale-110 transition-all duration-300">
                  <Play size={16} className="text-neon-green group-hover:text-cyber-black" />
                </div>
                <div className="flex-1">
                  <p className="font-mono text-sm text-white group-hover:text-neon-green transition-colors">
                    {song.title}
                  </p>
                  <p className="font-mono text-xs text-gray-500">
                    {song.artist}
                  </p>
                </div>
                <span className="font-mono text-xs text-gray-500">
                  {song.duration}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-6 pt-6 border-t border-neon-green/20 flex items-center justify-between">
            <p className="font-mono text-xs text-gray-500">
              {songs.length} songs • 17 min
            </p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
              <p className="font-mono text-xs text-neon-green">
                Live
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// Hobbies Section with Pokemon Cards
function HobbiesSection() {
  const { ref, inView } = useScrollAnimation()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="max-w-7xl mx-auto"
    >
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-2 glass-morphism rounded-full mb-4">
          <span className="text-neon-purple font-mono text-sm">Beyond Coding</span>
        </div>
        <h2 className="font-cyber text-3xl md:text-4xl text-gradient-purple mb-4">
          Hobbies & Interests
        </h2>
        <p className="font-mono text-gray-400 max-w-2xl mx-auto">
          When I'm not building digital experiences, I'm collecting physical ones.
        </p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-8">
        <PokemonCard
          title="Pokemon Go"
          description="Level 45 Trainer. Catching 'em all across the city. Team Mystic for life! Current goal: Complete Shiny Dex."
          icon="🎮"
        />
        <PokemonCard
          title="Pokemon Cards"
          description="Collecting since Base Set. Favorite cards: Charizard VMAX, Ancient Mew. Always hunting for vintage holos!"
          icon="🃏"
        />
        <PokemonCard
          title="Synthwave Music"
          description="Obsessed with retro-futuristic soundscapes. Always coding with neon beats in the background. Favorite artists: Carpenter Brut, Perturbator."
          icon="🎵"
        />
      </div>
    </motion.div>
  )
}

// Quick Facts Section
function QuickFactsSection({ facts }: { facts: any[] }) {
  const { ref, inView } = useScrollAnimation()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="max-w-6xl mx-auto"
    >
      <div className="text-center mb-12">
        <div className="inline-block px-4 py-2 glass-morphism rounded-full mb-4">
          <span className="text-neon-yellow font-mono text-sm">Stats</span>
        </div>
        <h2 className="font-cyber text-3xl text-gradient-blue mb-4">
          Quick Facts
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {facts.map((fact, index) => {
          const Icon = fact.icon
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1 }}
              className="glass-morphism rounded-xl p-6 hover:border-neon-blue/50 transition-all duration-300 hover:scale-105 group border border-white/5"
            >
              <Icon className="w-8 h-8 text-neon-blue mb-3 group-hover:scale-110 transition-transform" />
              <p className="font-mono text-xs text-gray-500 uppercase tracking-wider mb-2">
                {fact.label}
              </p>
              <p className="font-cyber text-2xl text-white group-hover:text-gradient-blue">
                {fact.value}
              </p>
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}