'use client'

import { Mail, Github, Linkedin } from 'lucide-react'

export default function Contact() {
  const contactMethods = [
    {
      name: 'Email',
      value: 'danishbirsinghbhatti@gmail.com',
      href: 'mailto:danishbirsinghbhatti@gmail.com',
      icon: Mail,
      color: 'neon-blue',
    },
    {
      name: 'GitHub',
      value: '@danish7x7',
      href: 'https://github.com/danish7x7',
      icon: Github,
      color: 'neon-green',
    },
    {
      name: 'LinkedIn',
      value: '/in/danishbir-singh-bhatti',
      href: 'https://www.linkedin.com/in/danishbir-singh-bhatti/',
      icon: Linkedin,
      color: 'neon-purple',
    },
  ]

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-5xl w-full">
        {/* Header */}
        <div className="text-center space-y-6 mb-20">
          <h1 className="font-pixel text-6xl md:text-8xl text-neon-blue">
            CONTACT
          </h1>
          <p className="font-mono text-xl text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Want to collaborate? Or just want to say hi?
          </p>
          <p className="font-mono text-sm text-gray-500">
            I typically respond within 24 hours.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {contactMethods.map((method, index) => {
            const Icon = method.icon
            return (
              <a
                key={index}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`group block p-8 bg-cyber-dark/50 border-2 border-${method.color}/30 rounded-lg hover:border-${method.color} hover:shadow-[0_0_30px_rgba(0,240,255,0.3)] transition-all duration-300`}
              >
                <div className="flex items-start gap-6">
                  <div className={`w-16 h-16 rounded-lg bg-${method.color}/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`text-${method.color}`} size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-cyber text-2xl text-white mb-2 group-hover:text-neon-blue transition-colors duration-300">
                      {method.name}
                    </h3>
                    <p className={`font-mono text-lg text-${method.color} break-all`}>
                      {method.value}
                    </p>
                  </div>
                </div>
              </a>
            )
          })}
        </div>

        {/* Availability Status */}
        <div className="text-center space-y-4 p-8 bg-gradient-to-br from-cyber-dark/50 to-cyber-black/50 border-2 border-neon-green/30 rounded-lg">
          <div className="flex items-center justify-center gap-3">
            <div className="w-3 h-3 bg-neon-green rounded-full animate-pulse"></div>
            <span className="font-cyber text-neon-green uppercase tracking-wider">
              Available for Opportunities
            </span>
          </div>
          <p className="font-mono text-sm text-gray-400 max-w-2xl mx-auto">
            Currently open to freelance projects, full-time opportunities, and interesting collaborations.
            Specializing in AI/ML, full-stack development, and creative web experiences.
          </p>
        </div>

        {/* Alternative Contact Section */}
        <div className="mt-16 text-center">
          <p className="font-mono text-gray-500 text-sm mb-4">
            Prefer a different platform?
          </p>
          <div className="flex justify-center gap-6">
            {[
              { name: 'Discord', value: 'username#0000' },
              { name: 'Telegram', value: '@username' },
            ].map((platform, index) => (
              <div
                key={index}
                className="px-4 py-2 bg-cyber-black/50 border border-neon-blue/30 rounded-lg"
              >
                <span className="font-mono text-xs text-gray-500 block mb-1">
                  {platform.name}
                </span>
                <span className="font-mono text-sm text-neon-blue">
                  {platform.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Fun Footer Message */}
        <div className="mt-20 text-center">
          <p className="font-pixel text-xs text-gray-600">
            &lt;/&gt; with 💙 in the matrix
          </p>
        </div>
      </div>
    </div>
  )
}