import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { siteConfig } from '@/siteConfig'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  title: `${siteConfig.gameName} - ${siteConfig.tagline}`,
  description: siteConfig.description,
  keywords: ['indie game', 'roguelite', 'mining game', 'texplore', 'steam game', 'early access', 'procedural generation', 'action roguelike', '2D', 'pixel graphics'],
  authors: [{ name: 'Dustin Garner' }],
  openGraph: {
    title: `${siteConfig.gameName} - ${siteConfig.tagline}`,
    description: siteConfig.description,
    type: 'website',
    url: 'https://texploregame.com',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: siteConfig.gameName,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.gameName} - ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {siteConfig.analytics.googleAnalyticsId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.analytics.googleAnalyticsId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${siteConfig.analytics.googleAnalyticsId}');
              `}
            </Script>
          </>
        )}
        {siteConfig.analytics.plausibleDomain && (
          <Script
            data-domain={siteConfig.analytics.plausibleDomain}
            src="https://plausible.io/js/script.js"
            strategy="afterInteractive"
          />
        )}
      </head>
      <body className={inter.className}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'VideoGame',
              name: siteConfig.gameName,
              description: siteConfig.description,
              genre: ['Action', 'Roguelite', 'Mining'],
              gamePlatform: ['PC', 'Windows', 'Linux', 'macOS'],
              offers: {
                '@type': 'Offer',
                url: siteConfig.steamUrl,
                priceCurrency: 'USD',
                availability: 'https://schema.org/PreOrder',
              },
            }),
          }}
        />
      </body>
    </html>
  )
}

