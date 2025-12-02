'use client'

import { siteConfig } from '@/siteConfig'
import { Hammer, Sword, TrendingUp, Rocket, Target, Infinity } from 'lucide-react'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  pickaxe: Hammer,
  sword: Sword,
  upgrade: TrendingUp,
  rocket: Rocket,
  strategy: Target,
  infinity: Infinity,
}

export default function Features() {
  return (
    <section id="features" className="py-20 lg:py-32 bg-slate-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-accent-emerald to-accent-cyan bg-clip-text text-transparent">
              Gameplay Highlights
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Everything that makes Texplore unique
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {siteConfig.features.map((feature, index) => {
            const Icon = iconMap[feature.icon] || Hammer
            return (
              <div
                key={index}
                className="group relative p-6 lg:p-8 bg-slate-800/50 border border-slate-700/50 rounded-2xl hover:border-accent-emerald/50 transition-all hover:shadow-lg hover:shadow-accent-emerald/10 hover:-translate-y-1"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-accent-emerald/20 to-accent-cyan/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 lg:w-7 lg:h-7 text-accent-emerald" />
                  </div>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold mb-3 text-white">
                  {feature.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

