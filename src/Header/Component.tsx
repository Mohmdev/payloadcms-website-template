import { HeaderClient } from './Component.client'
import { getCachedGlobal } from '@/utilities/getGlobals'
import React from 'react'

import type { Header, Setting } from '@/payload-types'

export async function Header() {
  const header: Header = await getCachedGlobal('header', 1)()
  const settingsData: Setting = await getCachedGlobal('settings', 1)()
  const siteLogoUrl =
    settingsData.siteLogo && typeof settingsData.siteLogo === 'object' && settingsData.siteLogo.url
      ? settingsData.siteLogo.url
      : undefined

  return <HeaderClient header={header} siteLogoUrl={siteLogoUrl} />
}
