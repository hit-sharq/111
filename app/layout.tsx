import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '1win Kenya — Sports Betting, Casino & Live Games',
  description: 'Play sports betting, casino and live games with 1win. Explore competitive odds, promotions and fast, secure gaming on mobile and desktop.',
  keywords: ['1win Kenya', '1win', 'sports betting', 'online casino', 'live betting', 'football betting'],
  robots: { index: true, follow: true },
  openGraph: {
    title: '1win Kenya — Sports Betting, Casino & Live Games',
    description: 'Sports betting, casino and live games with 1win.',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/images/logo.png',
      },
    ],
    apple: '/images/logo.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: [{ color: '#121212' }],
  userScalable: true,
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
