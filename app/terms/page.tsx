import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { siteConfig } from '@/siteConfig'

export const metadata = {
  title: 'Terms of Service - ' + siteConfig.gameName,
  description: 'Terms of Service for ' + siteConfig.gameName,
}

export default function TermsPage() {
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
            <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
            
            <div className="prose prose-invert max-w-none space-y-6 text-slate-300">
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Last Updated: {new Date().toLocaleDateString()}</h2>
                <p>
                  By accessing and using {siteConfig.gameName}, you agree to be bound by these Terms of Service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">License</h2>
                <p>
                  {siteConfig.gameName} is licensed, not sold. You are granted a non-exclusive, 
                  non-transferable license to use the game for personal, non-commercial purposes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Restrictions</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You may not reverse engineer, decompile, or disassemble the game</li>
                  <li>You may not redistribute, resell, or share your license</li>
                  <li>You may not use the game for commercial purposes without permission</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Refunds</h2>
                <p>
                  Refund policies are subject to the platform from which you purchased the game 
                  (Steam, direct purchase, etc.). Please refer to their respective refund policies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Disclaimer</h2>
                <p>
                  The game is provided "as is" without warranties of any kind. We are not liable 
                  for any damages arising from your use of the game.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Contact</h2>
                <p>
                  For questions about these Terms, please contact us through our Discord or email.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

