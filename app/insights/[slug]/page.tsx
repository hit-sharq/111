import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { PageFrame, SignalGraphic, Breadcrumbs } from '../../site-chrome'
import { getArticleBySlug, getAllSlugs, Article } from '../articles'
import { articleSchema, breadcrumbSchema, organizationSchema } from '../../../lib/schema'

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) {
    return { title: 'Article not found | 1Win Search' }
  }

  return {
    title: `${article.title} | 1Win Search`,
    description: article.text,
    alternates: { canonical: `https://1winsearch.com/insights/${slug}` },
    openGraph: {
      title: article.title,
      description: article.text,
      type: 'article',
      url: `https://1winsearch.com/insights/${slug}`,
      publishedTime: new Date().toISOString(),
      authors: ['1Win Search Desk'],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.text,
    },
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) {
    notFound()
  }

  const { Icon: IconComponent } = article
  const related = (article.related || [])
    .map((s) => getArticleBySlug(s))
    .filter(Boolean) as Article[]

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Insights', href: '/insights' },
    { label: article.title, href: `/insights/${slug}` },
  ]

  const articleJsonLd = articleSchema({
    slug,
    title: article.title,
    description: article.text,
  })
  const breadcrumbJsonLd = breadcrumbSchema({ items: breadcrumbItems })
  const orgJsonLd = organizationSchema()

  return (
    <PageFrame>
      <Breadcrumbs items={breadcrumbItems} />
      <section className="inner-hero">
        <div>
          <div className="eyebrow">{article.tag}</div>
          <h1>{article.title}</h1>
          <p>{article.text}</p>
        </div>
        <SignalGraphic type="route" />
      </section>
      <section className="inner-section article-detail">
        <div className="article-meta">
          <span>{article.readTime}</span>
          <span>1win search desk</span>
        </div>
        <div
          className="article-body"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
        {related.length > 0 && (
          <div className="related-articles">
            <h3>Related reading</h3>
            <div className="related-grid">
              {related.map((rel) => (
                <article key={rel.slug} className="related-card">
                  <div className="related-icon">
                    <rel.icon size={20} />
                  </div>
                  <div>
                    <div className="related-tag">{rel.tag}</div>
                    <h4>{rel.title}</h4>
                    <p>{rel.text}</p>
                  </div>
                  <a href={`/insights/${rel.slug}`} className="related-link">
                    Read <ArrowRight size={13} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        )}
        <div className="article-actions">
          <a href="/insights" className="button button-outline">
            <ArrowLeft size={15} /> Back to insights
          </a>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([orgJsonLd, articleJsonLd, breadcrumbJsonLd]) }}
      />
    </PageFrame>
  )
}
