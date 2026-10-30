/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  redirects: async () => [
    {
      source: '/insights/1win-aviator-minimum-deposit-10',
      destination: '/insights/1win-aviator-minimum-deposit-stake',
      permanent: true,
    },
    {
      source: '/insights/1win-best-betting-sites-kenya',
      destination: '/insights/1win-betting-site-alternatives',
      permanent: true,
    },
    {
      source: '/insights/1win-aviator-predictor-apps-myth',
      destination: '/insights/1win-aviator-predictor-apps-october-2026',
      permanent: true,
    },
    {
      source: '/insights/1win-crash-predictor-bots-myth',
      destination: '/insights/1win-aviator-predictor-apps-october-2026',
      permanent: true,
    },
    {
      source: '/insights/1win-is-aviator-legit-kenya',
      destination: '/insights/1win-review',
      permanent: true,
    },
    {
      source: '/insights/1win-is-crash-game-legit',
      destination: '/insights/1win-review',
      permanent: true,
    },
    {
      source: '/insights/1win-is-pakakumi-legit',
      destination: '/insights/1win-review',
      permanent: true,
    },
  ],
}

export default nextConfig
