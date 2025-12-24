'use client'

import PokemonCard from '@/components/PokemonCard'
import { Music, Play } from 'lucide-react'

export default function About() {
  const codingSongs = [
    { title: 'Synthetic Dreams', artist: 'Cyber Collective', duration: '3:45' },
    { title: 'Digital Horizons', artist: 'Neon Pulse', duration: '4:12' },
    { title: 'Code Matrix', artist: 'Binary Beats', duration: '3:58' },
    { title: 'Neural Networks', artist: 'AI Symphony', duration: '5:03' },
  ]

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="font-pixel text-5xl text-neon-pink">
            About Me
          </h1>
          <p className="font-mono text-gray-400 max-w-2xl mx-auto">
            Beyond the code, there's a person who loves music, gaming, and collecting memories.
          </p>
        </div>

        {/* Bio Section */}
        <section className="max-w-4xl mx-auto">
          <div className="bg-cyber-dark/50 border-2 border-neon-blue/30 rounded-lg p-8 space-y-6">
            <h2 className="font-cyber text-2xl text-neon-blue">
              Hi, I'm [Your Name] 👋
            </h2>
            <div className="font-mono text-gray-300 space-y-4 leading-relaxed">
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
        </section>

        {/* Spotify Section */}
        <section>
          <h2 className="font-pixel text-3xl text-neon-green mb-8 text-center">
            Coding Soundtrack
          </h2>
          <div className="max-w-2xl mx-auto bg-gradient-to-br from-cyber-dark to-cyber-black border-2 border-neon-green rounded-lg p-8 shadow-[0_0_30px_rgba(57,255,20,0.3)]">
            {/* Spotify Header */}
            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-neon-green/30">
              <div className="w-16 h-16 bg-neon-green rounded-lg flex items-center justify-center">
                <Music size={32} className="text-cyber-black" />
              </div>
              <div>
                <p className="font-mono text-xs text-gray-400 uppercase tracking-wider">
                  Now Playing
                </p>
                <h3 className="font-cyber text-xl text-neon-green">
                  My Coding Playlist
                </h3>
              </div>
            </div>

            {/* Song List */}
            <div className="space-y-3">
              {codingSongs.map((song, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-cyber-black/50 rounded-lg hover:bg-cyber-black transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-8 h-8 bg-neon-green/20 rounded flex items-center justify-center group-hover:bg-neon-green transition-all duration-300">
                    <Play size={16} className="text-neon-green group-hover:text-cyber-black" />
                  </div>
                  <div className="flex-1">
                    <p className="font-mono text-sm text-white group-hover:text-neon-green transition-colors duration-300">
                      {song.title}
                    </p>
                    <p className="font-mono text-xs text-gray-500">
                      {song.artist}
                    </p>
                  </div>
                  <span className="font-mono text-xs text-gray-500">
                    {song.duration}
                  </span>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="mt-6 pt-6 border-t border-neon-green/30 flex items-center justify-between">
              <p className="font-mono text-xs text-gray-500">
                4 songs • 17 min
              </p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
                <p className="font-mono text-xs text-neon-green">
                  Live
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Hobbies - Pokemon Cards */}
        <section>
          <h2 className="font-pixel text-3xl text-neon-purple mb-8 text-center">
            Hobbies & Interests
          </h2>
          <p className="font-mono text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            When I'm not building digital experiences, I'm collecting physical ones.
            Here are some of my favorite pastimes.
          </p>
          
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
          </div>
        </section>

        {/* Fun Facts */}
        <section className="max-w-4xl mx-auto">
          <h2 className="font-pixel text-2xl text-neon-yellow mb-8 text-center">
            Quick Facts
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { label: 'Favorite Language', value: 'TypeScript' },
              { label: 'Coffee Per Day', value: '∞ cups' },
              { label: 'Favorite IDE', value: 'VS Code + Vim' },
              { label: 'Hours Coding', value: '10,000+' },
              { label: 'GitHub Streak', value: '365 days' },
              { label: 'Favorite Framework', value: 'Next.js' },
            ].map((fact, index) => (
              <div
                key={index}
                className="bg-cyber-dark/50 border border-neon-blue/30 rounded-lg p-6 hover:border-neon-blue hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all duration-300"
              >
                <p className="font-mono text-xs text-gray-500 uppercase tracking-wider mb-2">
                  {fact.label}
                </p>
                <p className="font-cyber text-2xl text-neon-blue">
                  {fact.value}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}