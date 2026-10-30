import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'
import './page-content.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://1winsearch.com'),
  title: {
    template: '%s | 1Win',
    default: '1Win | Sports Betting, Casino & Aviator',
  },
  description: '1win is your destination for sports betting, casino games, slots, live tables, poker, and Aviator. Register, deposit, and play responsibly.',
  authors: [{ name: '1Win' }],
  creator: '1Win',
  publisher: '1Win',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: '1Win',
    title: '1Win | Sports Betting, Casino & Aviator',
    description: '1win is your destination for sports betting, casino games, slots, live tables, poker, and Aviator.',
    url: 'https://1winsearch.com',
    images: [
      {
        url: '/1win.jpeg',
        width: 1200,
        height: 630,
        alt: '1Win',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '1Win | Sports Betting, Casino & Aviator',
    description: '1win is your destination for sports betting, casino games, slots, live tables, poker, and Aviator.',
    images: ['/1win.jpeg'],
    creator: '@1win',
  },
  alternates: {
    canonical: 'https://1winsearch.com',
  },
  icons: {
    icon: [
      { url: '/1win.jpeg' },
    ],
    apple: '/1win.jpeg',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
