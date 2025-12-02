'use client'

import { siteConfig } from '@/siteConfig'
import { useState } from 'react'
import { X } from 'lucide-react'

export default function Screenshots() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <>
      <section className="py-20 lg:py-32 bg-slate-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-accent-emerald to-accent-cyan bg-clip-text text-transparent">
                Screenshots
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 max-w-6xl mx-auto">
            {siteConfig.screenshots.map((screenshot, index) => (
              <div
                key={index}
                className="relative aspect-video rounded-xl overflow-hidden cursor-pointer group"
                onClick={() => setSelectedImage(index)}
              >
                <div className="relative w-full h-full bg-slate-800">
                  <div className="absolute inset-0 flex items-center justify-center text-slate-600 text-sm">
                    Screenshot {index + 1}
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Close screenshot"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="relative max-w-7xl w-full">
            <div className="relative aspect-video bg-slate-800 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                {siteConfig.screenshots[selectedImage].alt}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

