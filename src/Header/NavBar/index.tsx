'use client'

import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { cn } from '@/utilities/cn'

import { SiteLogo } from '@/Settings/components/SiteLogo'
import { SearchIcon } from 'lucide-react'
import { CMSLink } from '@/components/Link'

import type { Header } from '@/payload-types'

interface NavBarProps {
  header: Header
  logoUrl?: string
  className?: string
}

export const NavBar: React.FC<NavBarProps> = ({ header, logoUrl, className }) => {
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

  const navItems = header?.navItems || []

  return (
    <div
      className={cn('container relative z-20', className)}
      {...(theme ? { 'data-theme': theme } : {})}
    >
      <div className="py-8 border-b border-border flex justify-between">
        <Link href="/">
          <SiteLogo
            logoUrl={logoUrl}
            loading="eager"
            priority="high"
            // className="invert dark:invert-0"
          />
        </Link>

        <nav className="flex gap-3 items-center">
          {navItems.map(({ link }, i) => {
            return <CMSLink key={i} {...link} appearance="link" />
          })}
          <Link href="/search">
            <span className="sr-only">Search</span>
            <SearchIcon className="w-5 text-primary" />
          </Link>
        </nav>
      </div>
    </div>
  )
}
