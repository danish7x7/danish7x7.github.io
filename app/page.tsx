'use client'

import Link from 'next/link'
import Hologram from '@/components/Hologram'
import { Github, ExternalLink } from 'lucide-react'

export default function Home() {
  const skills = [
    'TypeScript', 'Python', 'React', 'Next.js', 'Anime.js',
    'TensorFlow', 'PyTorch', 'Node.js', 'Tailwind CSS', 'Three.js'
  ]

  const projectTitles = [
    'AI Travel Companion',
    'Real-time Chat App',
    'Computer Vision Dashboard',
    'ML Model Optimizer',
    'Blockchain Explorer',
    'Neural Network Visualizer',
    'Sentiment Analysis Tool',
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
        {/* Animated background grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(0, 240, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 240, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }} />
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left: Text */}
          <div className="space-y-6">
            <h1 className="font-pixel text-6xl md:text-8xl text-neon-blue tracking-wider leading-tight">
              DEV
            </h1>
            <p className="font-mono text-xl text-gray-300 leading-relaxed">
              Software Developer & AI/ML Enthusiast
            </p>
            <p className="font-mono text-sm text-gray-400 max-w-md">
              Crafting pixel-perfect experiences with cutting-edge technology.
              Specializing in neural networks, web3, and immersive interfaces.
            </p>
            <div className="flex gap-4 pt-4">
              <Link
                href="/projects"
                className="px-6 py-3 bg-neon-blue text-cyber-black font-cyber text-sm font-bold rounded hover:bg-neon-pink hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(0,240,255,0.5)]"
              >
                View Projects
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 border-2 border-neon-green text-neon-green font-cyber text-sm font-bold rounded hover:bg-neon-green hover:text-cyber-black hover:scale-105 transition-all duration-300"
              >
                Get In Touch
              </Link>
            </div>
          </div>

          {/* Right: Hologram */}
          <div className="flex justify-center">
            <Hologram imageSrc="/me.png" size={420} />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-neon-blue rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-neon-blue rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-pixel text-3xl text-neon-pink mb-12 text-center">
            Skills & Technologies
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-cyber-dark border-2 border-neon-blue/50 rounded-lg font-mono text-sm text-gray-300 hover:border-neon-blue hover:text-neon-blue hover:scale-105 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,240,255,0.3)]"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-20 px-6 bg-cyber-dark/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-pixel text-3xl text-neon-green mb-12 text-center">
            Featured Project
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Project Image */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/30 to-neon-pink/30 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-cyber-dark border-4 border-neon-blue rounded-lg overflow-hidden">
                <img
                  src="/project-featured.jpg"
                  alt="Multimodal AI Travel Companion"
                  className="w-full h-80 object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%231a1a2e" width="400" height="300"/%3E%3Ctext fill="%2300f0ff" font-family="monospace" font-size="24" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EProject Preview%3C/text%3E%3C/svg%3E'
                  }}
                />
              </div>
            </div>

            {/* Project Description */}
            <div className="space-y-6">
              <h3 className="font-cyber text-4xl text-neon-blue">
                Multimodal AI Travel Companion
              </h3>
              <p className="font-mono text-gray-300 leading-relaxed">
                An intelligent travel assistant powered by GPT-4 Vision and custom ML models.
                Features real-time translation, landmark recognition, and personalized
                itinerary generation using multimodal inputs.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Python', 'TensorFlow', 'OpenAI API', 'React Native', 'Firebase'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-cyber-black border border-neon-purple text-neon-purple text-xs font-mono rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 pt-4">
                <a
                  href="https://github.com/yourusername/ai-travel-companion"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-neon-purple text-white font-cyber text-sm font-bold rounded hover:bg-neon-pink hover:scale-105 transition-all duration-300"
                >
                  <Github size={18} />
                  View Source
                </a>
                <a
                  href="https://demo.example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 border-2 border-neon-green text-neon-green font-cyber text-sm font-bold rounded hover:bg-neon-green hover:text-cyber-black hover:scale-105 transition-all duration-300"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Marquee */}
      <section className="py-12 overflow-hidden bg-neon-blue/5">
        <Link href="/projects" className="block group">
          <div className="relative">
            <div className="flex animate-marquee whitespace-nowrap">
              {[...projectTitles, ...projectTitles].map((title, index) => (
                <span
                  key={index}
                  className="mx-8 font-pixel text-2xl text-neon-blue group-hover:text-neon-pink transition-colors duration-300"
                >
                  {title} •
                </span>
              ))}
            </div>
          </div>
          <p className="text-center mt-6 font-mono text-sm text-gray-400 group-hover:text-neon-green transition-colors duration-300">
            Click to explore all projects →
          </p>
        </Link>
      </section>
    </div>
  )
}