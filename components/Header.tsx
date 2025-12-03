'use client'

import { useState, useEffect } from 'react'
import { siteConfig } from '@/siteConfig'
import { Menu, X, Download, ShoppingCart } from 'lucide-react'
import Link from 'next/link'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/95 backdrop-blur-md border-b border-slate-800'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-accent-emerald via-accent-cyan to-accent-purple bg-clip-text text-transparent">
              {siteConfig.gameName}
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-slate-300 hover:text-white transition-colors"
            >
              Features
            </a>
            <a
              href="#demo"
              className="text-slate-300 hover:text-white transition-colors"
            >
              Demo
            </a>
            <a
              href="#faq"
              className="text-slate-300 hover:text-white transition-colors"
            >
              FAQ
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#demo"
              className="flex items-center space-x-2 px-4 py-2 bg-accent-emerald/20 hover:bg-accent-emerald/30 text-accent-emerald border border-accent-emerald/50 rounded-lg transition-all hover:scale-105"
            >
              <Download className="w-4 h-4" />
              <span>Download Demo</span>
            </a>
            <a
              href={siteConfig.steamUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white rounded-lg transition-all hover:scale-105 shadow-lg shadow-blue-600/50"
            >
              <ShoppingCart className="w-4 h-4" />
              <span>Wishlist on Steam</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-300 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-800">
            <div className="flex flex-col space-y-4">
              <a
                href="#features"
                className="text-slate-300 hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#demo"
                className="text-slate-300 hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Demo
              </a>
              <a
                href="#faq"
                className="text-slate-300 hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FAQ
              </a>
              <a
                href="#demo"
                className="flex items-center justify-center space-x-2 px-4 py-2 bg-accent-emerald/20 text-accent-emerald border border-accent-emerald/50 rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Download className="w-4 h-4" />
                <span>Download Demo</span>
              </a>
              <a
                href={siteConfig.steamUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <ShoppingCart className="w-4 h-4" />
                <span>Wishlist on Steam</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

