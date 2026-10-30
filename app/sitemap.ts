import { MetadataRoute } from 'next'
import { getAllSlugs } from './insights/articles'

const baseUrl = 'https://1winsearch.com'

const staticRoutes = ['', '/services', '/approach', '/results', '/insights', '/faq'].map((path) => ({
  url: `${baseUrl}${path}`,
  lastModified: new Date().toISOString(),
  changeFrequency: 'weekly' as const,
  priority: path === '' ? 1 : 0.8,
}))

const articleRoutes = getAllSlugs().map((slug) => ({
  url: `${baseUrl}/insights/${slug}`,
  lastModified: new Date().toISOString(),
  changeFrequency: 'monthly' as const,
  priority: 0.7,
}))

export default function sitemap(): MetadataRoute.Sitemap {
  return [...staticRoutes, ...articleRoutes]
}
