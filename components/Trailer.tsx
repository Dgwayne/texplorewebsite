'use client'

import { siteConfig } from '@/siteConfig'
import { Play } from 'lucide-react'
import { useState } from 'react'
import TrailerModal from './TrailerModal'

export default function Trailer() {
  const [isTrailerOpen, setIsTrailerOpen] = useState(false)

  return (
    <>
      <section className="py-20 lg:py-32 bg-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-accent-emerald to-accent-cyan bg-clip-text text-transparent">
                See It In Action
              </span>
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <div
              className="relative aspect-video rounded-2xl overflow-hidden cursor-pointer group"
              onClick={() => setIsTrailerOpen(true)}
            >
              <img
                src={siteConfig.trailer.thumbnail}
                alt="Texplore Trailer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 lg:w-24 lg:h-24 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                  <Play className="w-10 h-10 lg:w-12 lg:h-12 text-slate-900 ml-1" fill="currentColor" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrailerModal isOpen={isTrailerOpen} onClose={() => setIsTrailerOpen(false)} />
    </>
  )
}

