import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { siteConfig } from '@/siteConfig'

export const metadata = {
  title: 'Privacy Policy - ' + siteConfig.gameName,
  description: 'Privacy Policy for ' + siteConfig.gameName,
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-950 pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-slate-400 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to home</span>
          </Link>

          <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 lg:p-12">
            <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
            
            <div className="prose prose-invert max-w-none space-y-6 text-slate-300">
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Last Updated: {new Date().toLocaleDateString()}</h2>
                <p>
                  This Privacy Policy describes how {siteConfig.gameName} ("we", "our", or "us") collects, 
                  uses, and protects your personal information when you use our website and game.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Information We Collect</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Email addresses (when you subscribe to our newsletter)</li>
                  <li>Game analytics and crash reports (anonymized)</li>
                  <li>Steam account information (when purchasing through Steam)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">How We Use Your Information</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>To send you updates about the game</li>
                  <li>To improve our game and services</li>
                  <li>To process purchases and provide customer support</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Data Security</h2>
                <p>
                  We implement appropriate security measures to protect your personal information. 
                  However, no method of transmission over the internet is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
                <p>
                  If you have questions about this Privacy Policy, please contact us through our 
                  Discord or email.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

