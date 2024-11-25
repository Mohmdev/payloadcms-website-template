import type { Header } from '@/payload-types'
import { getCachedGlobal } from '@/utilities/getGlobals'
import React from 'react'
import { NavbarClient } from './Navbar.client'

export async function Navbar({ className }: { className?: string }) {
  const header: Header = await getCachedGlobal('header', 1)()
  // const settingsData: Setting = await getCachedGlobal('settings', 1)()
  // const siteLogoUrl =
  //   settingsData.siteLogo && typeof settingsData.siteLogo === 'object' && settingsData.siteLogo.url
  //     ? settingsData.siteLogo.url
  //     : undefined

  return (
    <NavbarClient
      header={header}
      // siteLogoUrl={siteLogoUrl}
      className={className}
    />
  )
}
