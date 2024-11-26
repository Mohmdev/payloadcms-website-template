import { getCachedGlobal } from '@/utilities/getGlobals'
import type { SiteInfo } from '@/payload-types'

export async function getSiteName(): Promise<string | undefined> {
  const siteInfo = (await getCachedGlobal('site-info', 1)()) as SiteInfo
  return siteInfo?.siteName ?? undefined
}
