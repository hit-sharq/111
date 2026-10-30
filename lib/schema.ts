export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: '1Win Search',
    url: 'https://1winsearch.com',
    logo: 'https://1winsearch.com/icon.svg',
    sameAs: [],
    founder: {},
    foundingDate: '2026',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'CW',
    },
  }
}

export function articleSchema({
  slug,
  title,
  description,
  datePublished,
  dateModified,
  authorName = '1Win Search Desk',
  image,
}: {
  slug: string
  title: string
  description: string
  datePublished?: string
  dateModified?: string
  authorName?: string
  image?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `https://1winsearch.com/insights/${slug}#article`,
    url: `https://1winsearch.com/insights/${slug}`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://1winsearch.com/insights/${slug}`,
    },
    headline: title,
    description,
    image: image || 'https://1winsearch.com/icon.svg',
    author: {
      '@type': 'Organization',
      name: authorName,
    },
    publisher: {
      '@type': 'Organization',
      name: '1Win Search',
      logo: {
        '@type': 'ImageObject',
        url: 'https://1winsearch.com/icon.svg',
      },
    },
    datePublished: datePublished || new Date().toISOString().split('T')[0],
    dateModified: dateModified || new Date().toISOString().split('T')[0],
    inLanguage: 'en',
    isPartOf: {
      '@type': 'Website',
      '@id': 'https://1winsearch.com',
    },
  }
}

export function breadcrumbSchema({
  items,
}: {
  items: Array<{ name: string; url: string }>
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function faqSchema({
  faqs,
}: {
  faqs: Array<{ question: string; answer: string }>
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: 'https://1winsearch.com',
    name: '1Win Search',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://1winsearch.com/insights?q={search_term}',
      'query-input': 'required name=search_term',
    },
  }
}
