import type { GlobalConfig } from 'payload'
import { revalidateGraphics } from './hooks/revalidateGraphics'

export const SiteGraphics: GlobalConfig = {
  admin: {
    group: 'Settings',
  },
  slug: 'graphics',
  label: 'Graphics',
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [revalidateGraphics],
  },
  fields: [
    {
      name: 'siteLogo',
      label: 'Site Logo',
      type: 'upload',
      relationTo: 'assets',
    },
    {
      name: 'favicon',
      label: 'Favicon',
      type: 'upload',
      relationTo: 'assets',
    },
  ],
}
