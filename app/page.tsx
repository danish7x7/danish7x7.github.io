'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Hologram from '@/components/Hologram'
import { Github, ExternalLink, ArrowRight, Sparkles } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { useEffect, useRef } from 'react'
import anime from 'animejs'

export default function Home() {
  const skills = [
    'TypeScript', 'Python', 'React', 'Next.js', 'TensorFlow',
    'PyTorch', 'Node.js', 'Tailwind CSS', 'Three.js', 'WebGL'
  ]

  const featuredProject = {
    title: 'Multimodal AI Travel Companion',
    description: 'An intelligent travel assistant powered by GPT-4 Vision and custom ML models. Features real-time translation, landmark recognition, and personalized itinerary generation.',
    tags: ['Python', 'TensorFlow', 'OpenAI API', 'React Native', 'Firebase'],
    github: 'https://github.com/yourusername/ai-travel-companion',
    demo: 'https://demo.example.com',
  }

  // Anime.js for floating particles
  const particlesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (particlesRef.current) {
      const particles = particlesRef.current.querySelectorAll('.particle')
      
      anime({
        targets: particles,
        translateY: [
          { value: -10, duration: 2000 },
          { value: 10, duration: 2000 },
        ],
        translateX: [
          { value: -5, duration: 1500 },
          { value: 5, duration: 1500 },
        ],
        opacity: [
          { value: 0.3, duration: 1000 },
          { value: 0.8, duration: 1000 },
        ],
        scale: [
          { value: 0.8, duration: 1000 },
          { value: 1.2, duration: 1000 },
        ],
        easing: 'easeInOutSine',
        loop: true,
        delay: anime.stagger(200),
      })
    }
  }, [])

  return (
    <div className="min-h-screen bg-cyber-black relative overflow-hidden">
      {/* Animated Particles Background */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle absolute w-1 h-1 rounded-full bg-neon-blue"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative px-6">
        {/* Refined Grid Background */}
        <div className="absolute inset-0 refined-grid opacity-20"></div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-pink/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-block px-4 py-2 glass-morphism rounded-full mb-4">
              <span className="text-neon-green font-mono text-sm flex items-center gap-2">
                <Sparkles size={14} />
                Available for opportunities
              </span>
            </div>

            <h1 className="font-cyber text-6xl md:text-8xl leading-tight">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="block text-gradient-blue"
              >
                CREATIVE
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="block text-white"
              >
                DEVELOPER
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="font-mono text-xl text-gray-400 leading-relaxed max-w-lg"
            >
              Software Engineer & AI/ML Enthusiast crafting pixel-perfect experiences
              with cutting-edge technology.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex gap-4 pt-4"
            >
              <Link
                href="/projects"
                className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-neon-blue to-cyan-500 text-cyber-black font-cyber text-sm rounded-lg hover:scale-105 transition-all duration-300 shadow-neon-blue"
              >
                View Projects
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
              <Link
                href="/contact"
                className="flex items-center gap-2 px-8 py-4 glass-morphism text-neon-green font-cyber text-sm rounded-lg hover:scale-105 transition-all duration-300 border border-neon-green/30 hover:border-neon-green"
              >
                Get In Touch
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              <div className="text-center">
                <div className="text-3xl font-cyber text-gradient-blue mb-1">10K+</div>
                <div className="text-xs font-mono text-gray-500 uppercase">Hours Coding</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-cyber text-gradient-pink mb-1">50+</div>
                <div className="text-xs font-mono text-gray-500 uppercase">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-cyber text-gradient-purple mb-1">365</div>
                <div className="text-xs font-mono text-gray-500 uppercase">Day Streak</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Hologram */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center"
          >
            <Hologram imageSrc="/me.png" size={420} />
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-neon-blue/50 rounded-full flex items-start justify-center p-2 animate-bounce">
            <div className="w-1.5 h-3 bg-neon-blue rounded-full"></div>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <SkillsSection skills={skills} />

      {/* Featured Project Section */}
      <FeaturedProjectSection project={featuredProject} />
    </div>
  )
}

// Skills Section Component
function SkillsSection({ skills }: { skills: string[] }) {
  const { ref, inView } = useScrollAnimation()

  return (
    <section id="skills" ref={ref} className="py-32 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-black via-cyber-dark to-cyber-black"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 glass-morphism rounded-full mb-6">
            <span className="text-neon-purple font-mono text-sm">Technical Arsenal</span>
          </div>
          <h2 className="font-cyber text-4xl md:text-5xl text-gradient-pink mb-4">
            Skills & Technologies
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group px-6 py-3 glass-morphism rounded-lg font-mono text-sm text-gray-300 hover:text-neon-blue hover:border-neon-blue/30 transition-all duration-300 hover:scale-105 cursor-pointer border border-white/5"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Featured Project Section
function FeaturedProjectSection({ project }: { project: any }) {
  const { ref, inView } = useScrollAnimation()

  return (
    <section ref={ref} className="py-32 px-6 relative">
      <div className="absolute inset-0 refined-grid opacity-10"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-2 glass-morphism rounded-full mb-6">
            <span className="text-neon-green font-mono text-sm">Spotlight</span>
          </div>
          <h2 className="font-cyber text-4xl md:text-5xl text-gradient-blue mb-4">
            Featured Project
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Project Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/30 to-neon-pink/30 blur-3xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative aspect-video rounded-2xl overflow-hidden border-2 border-neon-blue/30 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark to-cyber-black"></div>
              <div className="relative w-full h-full flex items-center justify-center text-8xl">
                🌍
              </div>
              {/* Scanlines */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-full h-px bg-white"
                    style={{ top: `${i * 5}%` }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Project Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="font-cyber text-3xl md:text-4xl text-white">
              {project.title}
            </h3>
            <p className="font-mono text-gray-400 leading-relaxed text-lg">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag: string, i: number) => (
                <span
                  key={i}
                  className="px-3 py-1 glass-morphism text-xs font-mono text-gray-300 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-4 pt-4">
              <a
                href={project.github}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-neon-purple to-neon-pink text-white font-cyber text-sm rounded-lg hover:scale-105 transition-all duration-300 shadow-neon-purple group"
              >
                <Github size={18} />
                View Source
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
              </a>
              <a
                href={project.demo}
                className="flex items-center gap-2 px-6 py-3 glass-morphism text-neon-green font-cyber text-sm rounded-lg hover:scale-105 transition-all duration-300 border border-neon-green/30 hover:border-neon-green group"
              >
                <ExternalLink size={18} />
                Live Demo
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-20"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-3 px-8 py-4 glass-morphism text-neon-blue font-cyber text-sm rounded-lg hover:scale-105 transition-all duration-300 border border-neon-blue/30 hover:border-neon-blue group"
          >
            View All Projects
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}