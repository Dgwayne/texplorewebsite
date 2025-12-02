'use client'

import { siteConfig } from '@/siteConfig'
import { Download, Monitor, Terminal, Apple, Check } from 'lucide-react'
import { useState } from 'react'

export default function DemoDownload() {
  const [downloading, setDownloading] = useState<string | null>(null)

  const handleDownload = async (platform: 'windows' | 'linux' | 'mac') => {
    const demo = siteConfig.demo[platform]
    setDownloading(platform)
    
    // Track download event
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'download', {
        platform,
        version: siteConfig.demo.version,
      })
    }

    // Simulate download delay for UX
    setTimeout(() => {
      window.location.href = demo.url
      setDownloading(null)
    }, 300)
  }

  return (
    <section id="demo" className="py-20 lg:py-32 bg-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-accent-emerald to-accent-cyan bg-clip-text text-transparent">
                Try the Demo
              </span>
            </h2>
            <p className="text-xl text-slate-400">
              Version {siteConfig.demo.version} • Free to play
            </p>
          </div>

          {/* Platform Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            <button
              onClick={() => handleDownload('windows')}
              disabled={downloading !== null}
              className="group relative p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl hover:border-accent-emerald/50 transition-all hover:shadow-lg hover:shadow-accent-emerald/10 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <div className="flex flex-col items-center space-y-3">
                <Monitor className="w-10 h-10 text-blue-400" />
                <div className="text-center">
                  <div className="font-semibold text-white">Windows</div>
                  <div className="text-sm text-slate-400">{siteConfig.demo.windows.size}</div>
                </div>
                {downloading === 'windows' ? (
                  <div className="text-accent-emerald">Downloading...</div>
                ) : (
                  <Download className="w-5 h-5 text-slate-400 group-hover:text-accent-emerald transition-colors" />
                )}
              </div>
            </button>

            <button
              onClick={() => handleDownload('linux')}
              disabled={downloading !== null}
              className="group relative p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl hover:border-accent-emerald/50 transition-all hover:shadow-lg hover:shadow-accent-emerald/10 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <div className="flex flex-col items-center space-y-3">
                <Terminal className="w-10 h-10 text-yellow-400" />
                <div className="text-center">
                  <div className="font-semibold text-white">Linux</div>
                  <div className="text-sm text-slate-400">{siteConfig.demo.linux.size}</div>
                </div>
                {downloading === 'linux' ? (
                  <div className="text-accent-emerald">Downloading...</div>
                ) : (
                  <Download className="w-5 h-5 text-slate-400 group-hover:text-accent-emerald transition-colors" />
                )}
              </div>
            </button>

            <button
              onClick={() => handleDownload('mac')}
              disabled={downloading !== null}
              className="group relative p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl hover:border-accent-emerald/50 transition-all hover:shadow-lg hover:shadow-accent-emerald/10 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <div className="flex flex-col items-center space-y-3">
                <Apple className="w-10 h-10 text-slate-300" />
                <div className="text-center">
                  <div className="font-semibold text-white">macOS</div>
                  <div className="text-sm text-slate-400">{siteConfig.demo.mac.size}</div>
                </div>
                {downloading === 'mac' ? (
                  <div className="text-accent-emerald">Downloading...</div>
                ) : (
                  <Download className="w-5 h-5 text-slate-400 group-hover:text-accent-emerald transition-colors" />
                )}
              </div>
            </button>
          </div>

          {/* What's Included */}
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 lg:p-8">
            <h3 className="text-2xl font-bold mb-4 text-white">What's in the demo?</h3>
            <ul className="space-y-3">
              {siteConfig.demo.whatsIncluded.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-accent-emerald mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

