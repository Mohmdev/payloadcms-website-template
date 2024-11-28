import type { Asset, Graphic } from '@/payload-types'
import { getCachedGlobal } from '@/utilities/getGlobals'
import React from 'react'

interface FaviconProps {
  faviconUrl?: string
}

export const AdminFavicon: React.FC<FaviconProps> = async () => {
  const graphics = (await getCachedGlobal('graphics', 1)()) as Graphic
  const faviconUrl = (graphics?.favicon as Asset)?.url ?? undefined

  if (!faviconUrl) {
    return (
      <>
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
      </>
    )
  }

  return (
    <>
      <link href={faviconUrl} rel="icon" type="image/svg+xml" />
      <link href={faviconUrl} rel="apple-touch-icon" />
    </>
  )
}
