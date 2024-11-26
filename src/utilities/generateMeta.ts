import type { Metadata } from 'next'

import type { Page, Post } from '../payload-types'

import { mergeOpenGraph } from './mergeOpenGraph'
import { getServerSideURL } from './getURL'
import { getSiteName, getSiteDescription } from './getSiteMeta'

export const generateMeta = async (args: {
  doc: Partial<Page> | Partial<Post>
}): Promise<Metadata> => {
  const { doc } = args || {}

  const siteName = (await getSiteName()) || 'Payload CMS'
  const siteDescription =
    (await getSiteDescription()) || 'An open-source website built with Payload and Next.js.'

  const ogImage =
    typeof doc?.meta?.image === 'object' &&
    doc.meta.image !== null &&
    'url' in doc.meta.image &&
    `${getServerSideURL()}`

  // Base OpenGraph configuration
  const openGraphBase = mergeOpenGraph({
    siteName: siteName,
    title: siteName,
    description: siteDescription,
    images: ogImage ? [{ url: ogImage }] : undefined,
  })

  // Special handling for homepage
  if (doc?.slug === 'home') {
    return {
      title: siteName,
      description: siteDescription,
      openGraph: {
        ...openGraphBase,
        url: '/',
      },
    }
  }

  // Special handling for posts route
  if (doc?.slug === 'posts') {
    return {
      title: `Posts | ${siteName}`,
      description: 'Browse all posts.',
      openGraph: {
        ...openGraphBase,
        title: `Posts | ${siteName}`,
        description: 'Browse all posts.',
        url: '/posts',
      },
    }
  }

  // Special handling for search route
  if (doc?.slug === 'search') {
    return {
      title: `Search | ${siteName}`,
      description: 'Search across our site',
      openGraph: {
        ...openGraphBase,
        title: `Search | ${siteName}`,
        description: 'Search across our site',
        url: '/search',
      },
    }
  }

  // All other docs
  const documentTitle = doc?.meta?.title ? `${doc.meta.title} | ${siteName}` : siteName
  const documentDescription = doc?.meta?.description || siteDescription

  return {
    title: documentTitle,
    description: documentDescription,
    openGraph: {
      ...openGraphBase,
      title: documentTitle,
      description: documentDescription,
      url: Array.isArray(doc?.slug) ? doc?.slug.join('/') : '/',
    },
  }
}
