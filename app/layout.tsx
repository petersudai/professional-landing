import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { config } from '@/config/professional'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  metadataBase: new URL(config.meta.url),
  title: config.meta.title,
  description: config.meta.description,
  openGraph: {
    title: config.meta.title,
    description: config.meta.description,
    url: config.meta.url,
    siteName: config.meta.name,
    // og:image is generated automatically by app/opengraph-image.tsx
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: config.meta.title,
    description: config.meta.description,
    // twitter:image falls back to opengraph-image.tsx automatically
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="overflow-x-hidden">{children}</body>
    </html>
  )
}
