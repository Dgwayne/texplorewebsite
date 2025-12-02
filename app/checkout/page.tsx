'use client'

import { siteConfig } from '@/siteConfig'
import { CreditCard, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-slate-950 pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-2xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-slate-400 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to home</span>
          </Link>

          <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <CreditCard className="w-16 h-16 text-accent-emerald mx-auto mb-4" />
              <h1 className="text-3xl lg:text-4xl font-bold mb-2">
                Direct Purchase
              </h1>
              <p className="text-slate-400">
                Coming soon! We're setting up direct purchase options.
              </p>
            </div>

            <div className="bg-slate-900/50 rounded-xl p-6 mb-6">
              <h2 className="font-semibold text-white mb-4">What you'll get:</h2>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start space-x-2">
                  <span className="text-accent-emerald mt-1">✓</span>
                  <span>Steam key for {siteConfig.gameName}</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-accent-emerald mt-1">✓</span>
                  <span>DRM-free backup copy</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-accent-emerald mt-1">✓</span>
                  <span>All future updates</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-accent-emerald mt-1">✓</span>
                  <span>Direct developer support</span>
                </li>
              </ul>
            </div>

            <div className="text-center">
              <p className="text-slate-400 mb-6">
                In the meantime, you can purchase on Steam or join our mailing list for updates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={siteConfig.steamUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold hover:scale-105 transition-transform"
                >
                  Buy on Steam
                </a>
                <a
                  href="/#email"
                  className="px-6 py-3 bg-slate-700 text-white rounded-lg font-semibold hover:bg-slate-600 transition-colors"
                >
                  Get Updates
                </a>
              </div>
            </div>

            {/* Stripe Integration Placeholder */}
            <div className="mt-8 pt-8 border-t border-slate-700">
              <p className="text-xs text-slate-500 text-center">
                Direct purchase will be powered by Stripe. Secure checkout coming soon.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

