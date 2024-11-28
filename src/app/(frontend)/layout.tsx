import React from 'react'

import { cn } from 'src/utilities/cn'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import { Providers } from '@/providers'
import { InitTheme } from '@/providers/Theme/InitTheme'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { getServerSideURL } from '@/utilities/getURL'
import { getCachedGlobal } from '@/utilities/getGlobals'

import { Header } from '@/Header'
import { Footer } from '@/Footer'
import { DynamicFavicon } from '@/Settings/components/Favicon'

import './globals.css'

import type { Metadata } from 'next'
import type { Asset, Graphic } from '@/payload-types'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const graphics = (await getCachedGlobal('graphics', 1)()) as Graphic
  const logoLightUrl = (graphics?.logoLight as Asset)?.url ?? undefined
  const logoDarkUrl = (graphics?.logoDark as Asset)?.url ?? undefined
  const faviconUrl = (graphics?.favicon as Asset)?.url ?? undefined

  return (
    <html className={cn(GeistSans.variable, GeistMono.variable)} lang="en" suppressHydrationWarning>
      <head>
        <InitTheme />
        <DynamicFavicon faviconUrl={faviconUrl} />
      </head>
      <body>
        <Providers>
          <LivePreviewListener />
          <div
            className={cn(
              'min-h-[100vh]', // fallback
              'grid grid-rows-[auto_1fr_auto]',
            )}
            style={{ minHeight: '100dvh' }}
          >
            <Header logoUrl={logoLightUrl} />
            <main>{children}</main>
            <Footer logoUrl={logoLightUrl} />
          </div>
        </Providers>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(getServerSideURL()),
  openGraph: mergeOpenGraph(),
  twitter: {
    card: 'summary_large_image',
    creator: '@payloadcms',
  },
}
