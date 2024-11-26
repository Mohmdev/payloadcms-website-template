import type { Metadata } from 'next'

import { cn } from 'src/utilities/cn'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import React from 'react'

import { AdminBar } from '@/components/AdminBar'
import { Footer } from '@/Footer/Component'
import { Navbar } from '@/Header/Navbar.server'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import { Providers } from '@/providers'
import { InitTheme } from '@/providers/Theme/InitTheme'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { draftMode } from 'next/headers'

import { getServerSideURL } from '@/utilities/getURL'
import { DynamicFavicon } from '@/Settings/components/Favicon'
import { getCachedGlobal } from '@/utilities/getGlobals'

import type { Graphic } from '@/payload-types'

import './globals.css'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { isEnabled } = await draftMode()

  const graphics = (await getCachedGlobal('graphics', 1)()) as Graphic
  const faviconUrl =
    typeof graphics?.favicon === 'object' ? (graphics?.favicon?.url ?? undefined) : undefined

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
            <header className="h-max">
              <AdminBar adminBarProps={{ preview: isEnabled }} />
              <Navbar />
            </header>
            <main>{children}</main>
            <Footer />
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
