import type { Metadata } from 'next'
import { ArrowUpRight, BarChart3, Globe2, TrendingUp } from 'lucide-react'
import { PageFrame, SignalGraphic } from '../site-chrome'

export const metadata: Metadata = {
  title: '1Win SEO Results | Visibility Metrics',
  description: '1win SEO results: +312% non-brand visibility, +68% qualified sessions, 3.4x content efficiency. Progress you can see in the system.',
  alternates: { canonical: 'https://1winsearch.com/results' },
  openGraph: {
    title: '1Win SEO Results | Visibility Metrics',
    description: '+312% non-brand visibility, +68% qualified sessions, 3.4x content efficiency.',
    type: 'website',
  },
}

const metrics = [['+312%', 'non-brand visibility', 'International search footprint'], ['+68%', 'qualified sessions', 'High-intent product routes'], ['3.4×', 'content efficiency', 'Reusable market templates']]
export default function ResultsPage() { return <PageFrame><section className="inner-hero results-hero"><div><div className="eyebrow">Signals that matter / 03</div><h1>Progress you can<br /><em>see in the system.</em></h1><p>We look beyond ranking screenshots. Results are the combined effect of discoverability, useful content, technical quality, and a player journey that makes sense.</p></div><SignalGraphic type="route" /></section><section className="metric-grid">{metrics.map(([value, label, detail]) => <article key={label}><strong>{value}</strong><span>{label}</span><p>{detail}</p></article>)}</section><section className="inner-section case-layout"><div><div className="eyebrow">Featured growth story</div><h2>From scattered pages<br /><em>to one clear ecosystem.</em></h2><p>We brought sports betting, casino, poker, payments, promotions, and responsible gaming content into a more coherent search architecture for international audiences.</p><a className="text-link" href="/#contact">Talk through the model <ArrowUpRight size={16} /></a></div><div className="results-panel"><BarChart3 size={28} /><div className="panel-line"><i /><i /><i /><i /><i /></div><small>Visibility / quality / reach</small></div></section><section className="quote-band"><p>Better visibility is the output. A better 1win experience is the reason.</p></section></PageFrame> }