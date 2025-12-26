import type { Metadata } from 'next'
import { Orbitron, Space_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ReactNode } from 'react'
import PageTransition from '@/components/PageTransition'

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-cyber',
  display: 'swap',
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Danish Portfolio',
  description: 'A high-performance portfolio with pixel art and holographic effects',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
      </head>
      <body className={`${orbitron.variable} ${spaceMono.variable} bg-cyber-black text-white antialiased`}>
        <Navbar />
        <PageTransition>
          <main className="pt-20">{children}</main>
        </PageTransition>
        <Footer />
      </body>
    </html>
  )
}