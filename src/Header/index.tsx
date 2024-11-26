import React from 'react'
import { draftMode } from 'next/headers'
import { getCachedGlobal } from '@/utilities/getGlobals'
import { AdminBar } from './AdminBar'
import { NavBar } from './NavBar'

import type { Graphic, Header } from '@/payload-types'

export async function Header({ className }: { className?: string }) {
  const { isEnabled } = await draftMode()

  const header: Header = await getCachedGlobal('header', 1)()
  const graphics = (await getCachedGlobal('graphics', 1)()) as Graphic
  const siteLogoUrl =
    typeof graphics?.siteLogo === 'object' ? (graphics?.siteLogo?.url ?? undefined) : undefined

  return (
    <header className="h-max">
      <AdminBar adminBarProps={{ preview: isEnabled }} />
      <NavBar header={header} siteLogoUrl={siteLogoUrl} className={className} />
    </header>
  )
}
