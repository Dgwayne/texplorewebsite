'use client'

import { siteConfig } from '@/siteConfig'
import { Download, ShoppingCart, Play, MessageCircle } from 'lucide-react'
import { useState } from 'react'
import TrailerModal from './TrailerModal'

export default function Hero() {
  const [isTrailerOpen, setIsTrailerOpen] = useState(false)

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 lg:pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(6,182,212,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(168,85,247,0.1),transparent_50%)]" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Game Title */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 animate-fade-in">
              <span className="bg-gradient-to-r from-accent-emerald via-accent-cyan to-accent-purple bg-clip-text text-transparent">
                {siteConfig.gameName}
              </span>
            </h1>

            {/* Tagline */}
            <p className="text-xl sm:text-2xl lg:text-3xl text-slate-300 mb-12 animate-slide-up text-balance">
              {siteConfig.tagline}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 animate-slide-up">
              <a
                href="#demo"
                className="group flex items-center justify-center space-x-3 px-8 py-4 bg-gradient-to-r from-accent-emerald to-accent-cyan text-white rounded-xl font-semibold text-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-accent-emerald/50 w-full sm:w-auto"
              >
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                <span>Download Demo</span>
              </a>
              <a
                href={siteConfig.steamUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold text-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-600/50 w-full sm:w-auto"
              >
                <ShoppingCart className="w-5 h-5" />
                <span>Buy on Steam</span>
              </a>
            </div>

            {/* Secondary Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up">
              <button
                onClick={() => setIsTrailerOpen(true)}
                className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors group"
              >
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Watch Trailer</span>
              </button>
              <a
                href={siteConfig.discordUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors group"
              >
                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Join Discord</span>
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-slate-400 rounded-full" />
          </div>
        </div>
      </section>

      <TrailerModal isOpen={isTrailerOpen} onClose={() => setIsTrailerOpen(false)} />
    </>
  )
}

