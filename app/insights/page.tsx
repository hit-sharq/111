import type { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'
import { PageFrame, SignalGraphic } from '../site-chrome'
import { articles, type Article } from './articles'

export const metadata: Metadata = {
  title: '1Win Insights | Search Desk Articles',
  description: 'Useful thinking for the next play. Working notes, frameworks, and practical insights for building a more discoverable 1win experience.',
  alternates: { canonical: 'https://1winsearch.com/insights' },
  openGraph: {
    title: '1Win Insights | Search Desk Articles',
    description: 'Working notes, frameworks, and practical insights for the people building a more discoverable 1win experience.',
    type: 'website',
  },
}

export default function InsightsPage() {
  return (
    <PageFrame>
      <section className="inner-hero">
        <div>
          <div className="eyebrow">The search desk / 04</div>
          <h1>Useful thinking for<br /><em>the next play.</em></h1>
          <p>Working notes, frameworks, and practical insights for the people building a more discoverable 1win experience.</p>
        </div>
        <SignalGraphic type="orbit" />
      </section>
      <section className="inner-section">
        <div className="eyebrow">Latest insights</div>
        <div className="article-grid">
          {articles.map((article: Article) => {
            const Icon = article.icon as React.ComponentType<{ size?: number }>
            return (
              <article className="article-card" key={article.slug}>
                <div className="article-art"><Icon size={30} /></div>
                <div className="insight-meta">
                  {article.tag}<span>{article.readTime}</span>
                </div>
                <h2>{article.title}</h2>
                <p>{article.text}</p>
                <a href={`/insights/${article.slug}`}>
                  Read insight <ArrowRight size={15} />
                </a>
              </article>
            )
          })}
        </div>
      </section>
      <section className="newsletter-band">
        <div>
          <div className="eyebrow">Stay close to the signal</div>
          <h2>Get the next<br /><em>useful note.</em></h2>
        </div>
        <a className="button button-primary" href="mailto:search@1win.com?subject=1win%20Search%20insights">
          Join the internal brief <ArrowRight size={16} />
        </a>
      </section>
    </PageFrame>
  )
}