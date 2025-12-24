'use client'

import { Github, ExternalLink } from 'lucide-react'

interface Project {
  title: string
  description: string
  tags: string[]
  github: string
  demo?: string
  image?: string
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: 'Multimodal AI Travel Companion',
      description: 'An intelligent travel assistant powered by GPT-4 Vision and custom ML models. Features real-time translation, landmark recognition, and personalized itinerary generation.',
      tags: ['Python', 'TensorFlow', 'OpenAI API', 'React Native', 'Firebase'],
      github: 'https://github.com/yourusername/ai-travel-companion',
      demo: 'https://demo.example.com',
      image: '/project-1.jpg',
    },
    {
      title: 'Real-time Collaborative Code Editor',
      description: 'A VSCode-inspired editor with live collaboration, syntax highlighting, and AI-powered code completion. Built with WebSockets and operational transformation.',
      tags: ['TypeScript', 'WebSocket', 'Monaco Editor', 'Node.js', 'Redis'],
      github: 'https://github.com/yourusername/collab-editor',
      demo: 'https://editor.example.com',
      image: '/project-2.jpg',
    },
    {
      title: 'Computer Vision Dashboard',
      description: 'Real-time object detection and tracking system with custom YOLOv8 models. Includes analytics dashboard and alert system for security applications.',
      tags: ['Python', 'PyTorch', 'OpenCV', 'FastAPI', 'React'],
      github: 'https://github.com/yourusername/cv-dashboard',
      image: '/project-3.jpg',
    },
    {
      title: 'Neural Network Visualizer',
      description: 'Interactive 3D visualization of neural network architectures and training processes. Helps understand deep learning concepts through animation.',
      tags: ['TypeScript', 'Three.js', 'TensorFlow.js', 'D3.js', 'Next.js'],
      github: 'https://github.com/yourusername/nn-visualizer',
      demo: 'https://nn-viz.example.com',
      image: '/project-4.jpg',
    },
    {
      title: 'Blockchain Explorer & Analytics',
      description: 'Full-featured blockchain explorer with transaction tracking, smart contract analysis, and market insights. Supports multiple chains.',
      tags: ['TypeScript', 'Web3.js', 'PostgreSQL', 'GraphQL', 'Next.js'],
      github: 'https://github.com/yourusername/blockchain-explorer',
      demo: 'https://explorer.example.com',
      image: '/project-5.jpg',
    },
    {
      title: 'ML Model Optimizer',
      description: 'Automated hyperparameter tuning and model compression tool. Reduces model size by 70% while maintaining 95%+ accuracy using quantization and pruning.',
      tags: ['Python', 'PyTorch', 'ONNX', 'Docker', 'FastAPI'],
      github: 'https://github.com/yourusername/ml-optimizer',
      image: '/project-6.jpg',
    },
  ]

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="font-pixel text-5xl text-neon-blue">
            Projects
          </h1>
          <p className="font-mono text-gray-400 max-w-2xl mx-auto">
            A collection of my work spanning AI/ML, web development, and creative coding.
            Each project represents a unique challenge and learning experience.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-cyber-dark/50 border-2 border-neon-blue/30 rounded-lg overflow-hidden hover:border-neon-blue hover:shadow-[0_0_30px_rgba(0,240,255,0.3)] transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-cyber-black overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%231a1a2e" width="400" height="300"/%3E%3Ctext fill="%2300f0ff" font-family="monospace" font-size="20" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3E${encodeURIComponent(project.title)}%3C/text%3E%3C/svg%3E`
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark to-transparent opacity-60"></div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="font-cyber text-xl text-neon-blue group-hover:text-neon-pink transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="font-mono text-sm text-gray-400 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-cyber-black border border-neon-purple/50 text-neon-purple text-xs font-mono rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-neon-blue/10 border border-neon-blue text-neon-blue text-sm font-mono rounded hover:bg-neon-blue hover:text-cyber-black transition-all duration-300"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-neon-green/10 border border-neon-green text-neon-green text-sm font-mono rounded hover:bg-neon-green hover:text-cyber-black transition-all duration-300"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center space-y-6">
          <div className="inline-block p-8 bg-gradient-to-br from-cyber-dark to-cyber-black border-2 border-neon-pink rounded-lg">
            <h2 className="font-pixel text-2xl text-neon-pink mb-4">
              Want to collaborate?
            </h2>
            <p className="font-mono text-gray-400 mb-6 max-w-md">
              I'm always open to interesting projects and opportunities.
              Let's build something amazing together!
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-neon-pink text-white font-cyber text-sm font-bold rounded hover:bg-neon-blue hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,0,110,0.5)]"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}