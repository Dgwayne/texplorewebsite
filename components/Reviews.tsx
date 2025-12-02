'use client'

import { siteConfig } from '@/siteConfig'
import { Quote } from 'lucide-react'

export default function Reviews() {
  return (
    <section className="py-20 lg:py-32 bg-slate-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-accent-emerald to-accent-cyan bg-clip-text text-transparent">
              What People Are Saying
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {siteConfig.reviews.map((review, index) => (
            <div
              key={index}
              className="relative p-6 lg:p-8 bg-slate-800/50 border border-slate-700/50 rounded-2xl hover:border-accent-emerald/50 transition-all"
            >
              <Quote className="w-8 h-8 text-accent-emerald/50 mb-4" />
              <p className="text-slate-300 mb-6 leading-relaxed italic">
                "{review.quote}"
              </p>
              <div className="border-t border-slate-700 pt-4">
                <div className="font-semibold text-white">{review.author}</div>
                <div className="text-sm text-slate-500">{review.role}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Curator Logos */}
        {siteConfig.socialProof.showCuratorLogos && (
          <div className="mt-16 text-center">
            <p className="text-slate-500 mb-6 text-sm uppercase tracking-wider">
              Featured On
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
              {siteConfig.socialProof.curatorLogos.map((curator, index) => (
                <div
                  key={index}
                  className="h-12 w-24 bg-slate-700 rounded flex items-center justify-center text-xs text-slate-500"
                >
                  {curator.name}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

