import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Trailer from '@/components/Trailer'
import Screenshots from '@/components/Screenshots'
import DemoDownload from '@/components/DemoDownload'
import Purchase from '@/components/Purchase'
import Reviews from '@/components/Reviews'
import FAQ from '@/components/FAQ'
import EmailCapture from '@/components/EmailCapture'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Trailer />
      <Screenshots />
      <DemoDownload />
      <Purchase />
      <Reviews />
      <FAQ />
      <EmailCapture />
      <Footer />
    </main>
  )
}

