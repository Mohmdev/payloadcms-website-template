import React from 'react'
import { draftMode } from 'next/headers'
import { getCachedGlobal } from '@/utilities/getGlobals'
import { AdminBar } from './AdminBar'
import { NavBar } from './NavBar'

import type { Graphic, Header } from '@/payload-types'

export async function Header({ logoUrl, className }: { logoUrl?: string; className?: string }) {
  const { isEnabled } = await draftMode()

  const header: Header = await getCachedGlobal('header', 1)()
  // const graphics = (await getCachedGlobal('graphics', 2)()) as Graphic
  // const siteLogoLightUrl =
  //   typeof graphics?.siteLogo?.light === 'object'
  //     ? (graphics?.siteLogo?.light?.url ?? undefined)
  //     : undefined

  return (
    <header className="h-max">
      <AdminBar adminBarProps={{ preview: isEnabled }} />
      <NavBar header={header} logoUrl={logoUrl} className={className} />
    </header>
  )
}
