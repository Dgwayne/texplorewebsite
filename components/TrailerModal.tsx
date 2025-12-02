'use client'

import { X } from 'lucide-react'
import { siteConfig } from '@/siteConfig'
import { useEffect } from 'react'

interface TrailerModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function TrailerModal({ isOpen, onClose }: TrailerModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl bg-slate-900 rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
          aria-label="Close trailer"
        >
          <X className="w-6 h-6" />
        </button>
        <div className="relative aspect-video">
          <iframe
            src={`https://www.youtube.com/embed/${siteConfig.trailer.youtubeId}?autoplay=1&rel=0`}
            title="Texplore Trailer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>
      </div>
    </div>
  )
}

