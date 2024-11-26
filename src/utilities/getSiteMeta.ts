import { getCachedGlobal } from '@/utilities/getGlobals'
import type { SiteInfo } from '@/payload-types'

async function getSiteInfo(): Promise<SiteInfo | undefined> {
  return (await getCachedGlobal('site-info', 1)()) as SiteInfo
}

export async function getSiteName(): Promise<string | undefined> {
  const siteInfo = await getSiteInfo()
  return siteInfo?.siteName ?? undefined
}

export async function getSiteDescription(): Promise<string | undefined> {
  const siteInfo = await getSiteInfo()
  return siteInfo?.siteDescription ?? undefined
}
