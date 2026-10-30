import type { Metadata } from 'next'
import { ArrowRight, Check, Compass, Layers3, LineChart, Search } from 'lucide-react'
import { PageFrame, SignalGraphic } from '../site-chrome'

export const metadata: Metadata = {
  title: '1Win SEO Approach | How We Grow',
  description: 'The 1win search operating model: map demand, design routes, ship with care, and learn to compound. Strategy that keeps moving.',
  alternates: { canonical: 'https://1winsearch.com/approach' },
  openGraph: {
    title: '1Win SEO Approach | How We Grow',
    description: 'Map demand, design routes, ship with care, and learn to compound.',
    type: 'website',
  },
}

const phases = [['01', 'Map the demand', 'We connect player questions, product priorities, market language, and search behavior into one opportunity map.', Search], ['02', 'Design the route', 'We turn that map into an architecture of pages, links, metadata, structured data, and content briefs.', Compass], ['03', 'Ship with care', 'We work alongside product, content, legal, and regional teams so every release is useful and accurate.', Layers3], ['04', 'Learn and compound', 'We measure visibility and quality signals, then use what we learn to make the next iteration sharper.', LineChart]]

export default function ApproachPage() { return <PageFrame><section className="inner-hero dark-hero"><div><div className="eyebrow">How 1win grows / 02</div><h1>Strategy that<br /><em>keeps moving.</em></h1><p>Search is not a campaign that ends. It is an operating system for making the 1win experience easier to understand across markets, products, and devices.</p></div><SignalGraphic type="orbit" /></section><section className="inner-section"><div className="eyebrow">Our operating model</div><div className="phase-list">{phases.map(([number, title, text, Icon]) => { const I = Icon as typeof Search; return <article className="phase-row" key={number as string}><span className="phase-number">{number as string}</span><I size={24} /><div><h2>{title as string}</h2><p>{text as string}</p></div><Check size={18} /></article> })}</div></section><section className="split-callout"><div><div className="eyebrow">One connected team</div><h2>Built inside<br /><em>the game.</em></h2></div><div><p>SEO works best when it is close to the people shaping the product. This system gives 1win a shared language for prioritization, production, and learning.</p><a className="button button-primary" href="/#contact">Open the playbook <ArrowRight size={16} /></a></div></section></PageFrame> }