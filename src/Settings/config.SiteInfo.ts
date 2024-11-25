import type { GlobalConfig } from 'payload'
import { revalidateSiteInfo } from './hooks/revalidateSiteInfo'

export const SiteInfo: GlobalConfig = {
  admin: {
    group: 'Settings',
  },
  slug: 'site-info',
  label: 'Site Info',
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [revalidateSiteInfo],
  },
  fields: [
    {
      name: 'siteName',
      label: 'Site Name',
      type: 'text',
    },
    {
      name: 'siteDescription',
      label: 'Site Description',
      type: 'textarea',
    },
  ],
}
