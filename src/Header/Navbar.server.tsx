import type { Header } from '@/payload-types'
import { getCachedGlobal } from '@/utilities/getGlobals'
import React from 'react'
import { NavbarClient } from './Navbar.client'

import type { Graphic } from '@/payload-types'

export async function Navbar({ className }: { className?: string }) {
  const header: Header = await getCachedGlobal('header', 1)()
  const graphics = (await getCachedGlobal('graphics', 1)()) as Graphic
  const siteLogoUrl =
    typeof graphics?.siteLogo === 'object' ? (graphics?.siteLogo?.url ?? undefined) : undefined

  return <NavbarClient header={header} siteLogoUrl={siteLogoUrl} className={className} />
}
