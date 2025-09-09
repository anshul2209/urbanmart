import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { OrganizationJsonLd } from '@/components/OrganizationJsonLd'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: 'UrbanMart - Premium Online Shopping',
    template: '%s | UrbanMart',
  },
  description:
    'Discover amazing products at UrbanMart - your premier destination for beauty, fragrances, furniture, and groceries. Shop with confidence and enjoy fast delivery.',
  keywords: [
    'online shopping',
    'ecommerce',
    'beauty products',
    'fragrances',
    'furniture',
    'groceries',
    'shopping',
    'retail',
  ],
  authors: [{ name: 'UrbanMart Team' }],
  creator: 'UrbanMart',
  publisher: 'UrbanMart',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://urbanmart.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://urbanmart.com',
    title: 'UrbanMart - Premium Online Shopping',
    description:
      'Discover amazing products at UrbanMart - your premier destination for beauty, fragrances, furniture, and groceries.',
    siteName: 'UrbanMart',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'UrbanMart - Premium Online Shopping',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UrbanMart - Premium Online Shopping',
    description:
      'Discover amazing products at UrbanMart - your premier destination for beauty, fragrances, furniture, and groceries.',
    images: ['/og-image.jpg'],
    creator: '@urbanmart',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <OrganizationJsonLd />
      </head>
      <body
        className={`bg-gray-100 font-sans text-slate-800 min-h-screen ${geistSans.variable} ${geistMono.variable}`}
      >
        <Header />
        <main className="container py-6 flex flex-col gap-8">
          <div className="card">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  )
}
