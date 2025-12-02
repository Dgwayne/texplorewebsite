'use client'

import { siteConfig } from '@/siteConfig'
import { useState } from 'react'
import { Mail, Check } from 'lucide-react'

export default function EmailCapture() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setMessage('')

    try {
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setMessage(siteConfig.emailCapture.successMessage)
        setEmail('')
        
        // Track conversion
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'email_signup', {
            method: 'newsletter',
          })
        }
      } else {
        setStatus('error')
        setMessage(data.error || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      setStatus('error')
      setMessage('Network error. Please try again later.')
    }
  }

  if (!siteConfig.emailCapture.enabled) return null

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <Mail className="w-12 h-12 text-accent-emerald mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-accent-emerald to-accent-cyan bg-clip-text text-transparent">
                Stay Updated
              </span>
            </h2>
            <p className="text-lg text-slate-400">
              Get notified about updates, new features, and launch announcements
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={siteConfig.emailCapture.placeholder}
              required
              disabled={status === 'loading' || status === 'success'}
              className="flex-1 px-6 py-4 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-accent-emerald/50 focus:ring-2 focus:ring-accent-emerald/20 disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className="px-8 py-4 bg-gradient-to-r from-accent-emerald to-accent-cyan text-white rounded-xl font-semibold transition-all hover:scale-105 hover:shadow-lg hover:shadow-accent-emerald/50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {status === 'success' ? (
                <>
                  <Check className="w-5 h-5" />
                  <span>Subscribed!</span>
                </>
              ) : status === 'loading' ? (
                <span>Subscribing...</span>
              ) : (
                <span>{siteConfig.emailCapture.buttonText}</span>
              )}
            </button>
          </form>

          {message && (
            <p
              className={`mt-4 text-sm ${
                status === 'success' ? 'text-accent-emerald' : 'text-red-400'
              }`}
            >
              {message}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}

