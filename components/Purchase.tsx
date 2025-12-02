'use client'

import { siteConfig } from '@/siteConfig'
import { ShoppingCart, CreditCard } from 'lucide-react'
import Link from 'next/link'

export default function Purchase() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-accent-emerald to-accent-cyan bg-clip-text text-transparent">
              Get the Full Game
            </span>
          </h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
            Available now on Steam, or purchase directly from us
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href={siteConfig.steamUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold text-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-600/50 w-full sm:w-auto"
            >
              <ShoppingCart className="w-5 h-5" />
              <span>Buy on Steam</span>
            </a>

            {siteConfig.directPurchase.enabled && (
              <Link
                href={siteConfig.directPurchase.checkoutUrl}
                className="group flex items-center justify-center space-x-3 px-8 py-4 bg-slate-800 border border-slate-700 hover:border-accent-emerald/50 text-white rounded-xl font-semibold text-lg transition-all hover:scale-105 w-full sm:w-auto"
              >
                <CreditCard className="w-5 h-5" />
                <span>Buy Direct</span>
              </Link>
            )}
          </div>

          {siteConfig.directPurchase.enabled && (
            <p className="mt-6 text-sm text-slate-500">
              Direct purchases include a Steam key + DRM-free backup
            </p>
          )}
        </div>
      </div>
    </section>
  )
}

