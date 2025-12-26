'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink, ArrowRight } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import Image from 'next/image'

interface Project {
  title: string
  description: string
  longDescription: string
  tags: string[]
  github: string
  demo?: string
  image: string
  gradient: string
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: 'Multimodal AI Travel Companion',
      description: 'Intelligent travel assistant powered by GPT-4 Vision',
      longDescription: 'An intelligent travel assistant powered by GPT-4 Vision and custom ML models. Features real-time translation, landmark recognition, and personalized itinerary generation using advanced computer vision and natural language processing.',
      tags: ['Python', 'TensorFlow', 'OpenAI API', 'React Native', 'Firebase'],
      github: 'https://github.com/yourusername/ai-travel-companion',
      demo: 'https://demo.example.com',
      image: '/project-1.jpg',
      gradient: 'from-blue-500/20 via-cyan-500/20 to-teal-500/20',
    },
    {
      title: 'Real-time Collaborative Code Editor',
      description: 'VSCode-inspired editor with live collaboration',
      longDescription: 'A VSCode-inspired editor with live collaboration, syntax highlighting, and AI-powered code completion. Built with WebSockets and operational transformation for seamless real-time editing.',
      tags: ['TypeScript', 'WebSocket', 'Monaco Editor', 'Node.js', 'Redis'],
      github: 'https://github.com/yourusername/collab-editor',
      demo: 'https://editor.example.com',
      image: '/project-2.jpg',
      gradient: 'from-purple-500/20 via-pink-500/20 to-rose-500/20',
    },
    {
      title: 'Computer Vision Dashboard',
      description: 'Real-time object detection and tracking system',
      longDescription: 'Real-time object detection and tracking system with custom YOLOv8 models. Includes analytics dashboard and alert system for security applications with 95%+ accuracy.',
      tags: ['Python', 'PyTorch', 'OpenCV', 'FastAPI', 'React'],
      github: 'https://github.com/yourusername/cv-dashboard',
      image: '/project-3.jpg',
      gradient: 'from-green-500/20 via-emerald-500/20 to-teal-500/20',
    },
    {
      title: 'Neural Network Visualizer',
      description: 'Interactive 3D visualization of neural networks',
      longDescription: 'Interactive 3D visualization of neural network architectures and training processes. Helps understand deep learning concepts through animation using Three.js and TensorFlow.js.',
      tags: ['TypeScript', 'Three.js', 'TensorFlow.js', 'D3.js', 'Next.js'],
      github: 'https://github.com/yourusername/nn-visualizer',
      demo: 'https://nn-viz.example.com',
      image: '/project-4.jpg',
      gradient: 'from-violet-500/20 via-purple-500/20 to-fuchsia-500/20',
    },
  ]

  return (
    <div className="min-h-screen bg-cyber-black">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 refined-grid opacity-30"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-neon-pink/10 rounded-full blur-3xl"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto relative z-10"
        >
          <div className="inline-block mb-6 px-4 py-2 glass-morphism rounded-full">
            <span className="text-neon-blue font-mono text-sm">Featured Work</span>
          </div>
          
          <h1 className="font-cyber text-5xl md:text-7xl mb-6">
            <span className="text-gradient-blue">Selected Projects</span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-2xl font-mono leading-relaxed">
            A collection of my work spanning AI/ML, web development, and creative coding.
            Each project represents a unique challenge and learning experience.
          </p>
        </motion.div>
      </section>

      {/* Projects Grid - Bettina Style Large Images */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto space-y-40">
          {projects.map((project, index) => (
            <ProjectShowcase key={index} project={project} index={index} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/20 via-neon-pink/20 to-neon-purple/20 blur-3xl"></div>
            <div className="relative glass-morphism rounded-2xl p-12">
              <h2 className="font-cyber text-3xl md:text-4xl mb-6 text-gradient-pink">
                Want to collaborate?
              </h2>
              <p className="font-mono text-gray-400 mb-8 text-lg max-w-2xl mx-auto">
                I'm always open to interesting projects and opportunities.
                Let's build something amazing together!
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple text-white font-cyber rounded-lg hover:scale-105 transition-all duration-300 shadow-neon-blue group"
              >
                Get In Touch
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

// Individual Project Showcase Component
function ProjectShowcase({ project, index }: { project: Project; index: number }) {
  const { ref, inView } = useScrollAnimation()
  const isEven = index % 2 === 0

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.2 }}
      className={`grid md:grid-cols-2 gap-12 items-center ${
        isEven ? '' : 'md:grid-flow-dense'
      }`}
    >
      {/* Image Section */}
      <div className={`relative group ${isEven ? '' : 'md:col-start-2'}`}>
        {/* Glow Effect */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} blur-3xl opacity-50 group-hover:opacity-75 transition-opacity duration-500`}></div>
        
        {/* Image Container */}
        <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark to-cyber-black"></div>
          
          {/* Placeholder for now - replace with actual images */}
          <div className="relative w-full h-full flex items-center justify-center">
            <div className={`text-8xl opacity-50 bg-gradient-to-br ${project.gradient} bg-clip-text text-transparent`}>
              {index + 1}
            </div>
          </div>
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/0 via-transparent to-neon-pink/0 group-hover:from-neon-blue/10 group-hover:to-neon-pink/10 transition-all duration-500"></div>
          
          {/* Scanline Effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-full h-px bg-white"
                style={{ top: `${i * 5}%` }}
              />
            ))}
          </div>
        </div>

        {/* Corner Accents */}
        <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-neon-blue"></div>
        <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-neon-pink"></div>
        <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-neon-green"></div>
        <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-neon-purple"></div>
      </div>

      {/* Content Section */}
      <div className={isEven ? '' : 'md:col-start-1 md:row-start-1'}>
        <motion.div
          initial={{ opacity: 0, x: isEven ? -20 : 20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Project Number */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-neon-blue font-pixel text-xs">
              PROJECT {String(index + 1).padStart(2, '0')}
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-neon-blue/50 to-transparent"></div>
          </div>

          {/* Title */}
          <h3 className="font-cyber text-3xl md:text-4xl mb-4 text-white group-hover:text-gradient-blue transition-all duration-300">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-gray-400 font-mono text-base mb-6 leading-relaxed">
            {project.longDescription}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.6 + i * 0.1 }}
                className="px-3 py-1 glass-morphism rounded-full text-xs font-mono text-gray-300 hover:text-neon-blue hover:border-neon-blue/30 transition-all duration-300"
              >
                {tag}
              </motion.span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-neon-blue to-cyan-500 text-cyber-black font-cyber text-sm rounded-lg hover:scale-105 transition-all duration-300 shadow-neon-blue group"
            >
              <Github size={18} />
              <span>Code</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
            </a>
            
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 glass-morphism text-neon-green font-cyber text-sm rounded-lg hover:scale-105 transition-all duration-300 border border-neon-green/30 hover:border-neon-green group"
              >
                <ExternalLink size={18} />
                <span>Demo</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}