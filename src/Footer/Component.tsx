import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'

import type { Footer, Graphic } from '@/payload-types'

import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
import { CMSLink } from '@/components/Link'
import { cn } from '@/utilities/cn'
import { SiteLogo } from '@/Settings/components/SiteLogo'

export async function Footer({ className }: { className?: string }) {
  const footer: Footer = await getCachedGlobal('footer', 1)()

  const navItems = footer?.navItems || []

  const graphics = (await getCachedGlobal('graphics', 1)()) as Graphic
  const siteLogoUrl =
    typeof graphics?.siteLogo === 'object' ? (graphics?.siteLogo?.url ?? undefined) : undefined

  return (
    <footer className={cn('border-t border-border bg-black dark:bg-card text-white', className)}>
      <div className="container py-8 gap-8 flex flex-col md:flex-row md:justify-between">
        <Link className="flex items-center" href="/">
          <SiteLogo
            logoUrl={siteLogoUrl}
            loading="lazy"
            priority="auto"
            className="invert dark:invert-0"
          />
        </Link>

        <div className="flex flex-col-reverse items-start md:flex-row gap-4 md:items-center">
          <ThemeSelector />
          <nav className="flex flex-col md:flex-row gap-4">
            {navItems.map(({ link }, i) => {
              return <CMSLink className="text-white" key={i} {...link} />
            })}
          </nav>
        </div>
      </div>
    </footer>
  )
}
