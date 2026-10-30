import type { Metadata } from 'next'
import { ArrowRight, BarChart3, Globe2, Search, ShieldCheck, Target, TrendingUp } from 'lucide-react'
import { PageFrame, SignalGraphic } from '../site-chrome'

export const metadata: Metadata = {
  title: '1Win SEO Services | Sportsbook, Casino, Live Betting',
  description: '1win SEO services: technical SEO, content strategy, sportsbook SEO, casino content, international growth. Making 1win easier to discover across every market.',
  alternates: { canonical: 'https://1winsearch.com/services' },
  openGraph: {
    title: '1Win SEO Services | Sportsbook, Casino, Live Betting',
    description: 'Technical SEO, content strategy, sportsbook SEO, casino content, and international growth for 1win.',
    type: 'website',
  },
}

const capabilities = [
  ['Technical SEO', 'Protect crawlability, indexation, performance, schema, canonicals, and international architecture across the 1win platform.', Search],
  ['Sportsbook SEO', 'Build discoverable routes for football, tennis, basketball, esports, pre-match markets, and live betting experiences.', Target],
  ['Casino & games', 'Organize high-intent content for slots, live casino, poker, game guides, providers, and responsible play information.', BarChart3],
  ['International SEO', 'Create scalable market templates, hreflang signals, localized intent maps, and region-ready content operations.', Globe2],
  ['Content systems', 'Turn search demand into clear editorial briefs, landing pages, FAQs, and internal linking that moves players forward.', TrendingUp],
  ['Trust & compliance', 'Make promotions, payments, age guidance, terms, and responsible gaming information easy to find and understand.', ShieldCheck],
]

export default function ServicesPage() {
  return <PageFrame><section className="inner-hero"><div><div className="eyebrow">1win growth system / 01</div><h1>Every search has a<br /><em>right destination.</em></h1><p>We build the SEO foundations, content routes, and market signals that help 1win players find the product they are looking for — quickly, clearly, and responsibly.</p></div><SignalGraphic type="bars" /></section><section className="inner-section"><div className="eyebrow">Capabilities</div><div className="capability-grid">{capabilities.map(([title, text, Icon]) => { const I = Icon as typeof Search; return <article className="capability-card" key={title as string}><I size={24} /><h2>{title as string}</h2><p>{text as string}</p><a href="/#contact">Explore this route <ArrowRight size={15} /></a></article> })}</div></section><section className="quote-band"><p>“The goal is not more traffic. It is a clearer path from intent to the right 1win experience.”</p></section></PageFrame> }