'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import type { Header } from '@/payload-types'
import { Nav } from './Nav'
import { SiteLogo } from '@/Settings/components/SiteLogo'
import { cn } from '@/utilities/cn'

interface NavbarClientProps {
  header: Header
  siteLogoUrl?: string
  className?: string
}

export const NavbarClient: React.FC<NavbarClientProps> = ({ header, siteLogoUrl, className }) => {
  /* Storing the value in a useState to avoid hydration errors */
  const [theme, setTheme] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()

  useEffect(() => {
    setHeaderTheme(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme])

  return (
    <div
      className={cn('container relative z-20', className)}
      {...(theme ? { 'data-theme': theme } : {})}
    >
      <div className="py-8 border-b border-border flex justify-between">
        <Link href="/">
          <SiteLogo
            logoUrl={siteLogoUrl}
            loading="eager"
            priority="high"
            className="invert dark:invert-0"
          />
        </Link>
        <Nav header={header} />
      </div>
    </div>
  )
}
