import type { GlobalConfig } from 'payload'
import { revalidateGraphics } from './hooks/revalidateGraphics'

export const SiteGraphics: GlobalConfig = {
  slug: 'graphics',
  admin: {
    group: 'Settings',
    description:
      "Here, you can upload your own brand's graphics and personalize the look and feel of your website.",
  },
  label: 'Graphics',
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [revalidateGraphics],
  },
  fields: [
    // Group 1
    {
      name: 'logoLight',
      label: 'Logo Light',
      type: 'upload',
      relationTo: 'assets',
      admin: {
        description:
          'Light-colored version of your logo optimized for dark backgrounds and dark mode displays.',
      },
    },
    {
      name: 'logoDark',
      label: 'Logo Dark',
      type: 'upload',
      relationTo: 'assets',
      admin: {
        description:
          'Dark-colored version of your logo optimized for light backgrounds and standard displays.',
      },
    },
    // Group 2
    {
      name: 'favicon',
      label: 'Favicon',
      type: 'upload',
      relationTo: 'assets',
      admin: {
        description:
          'The small icon that is displayed in the browser tab. </br> Recommended size: 32x32px.',
      },
    },
    {
      name: 'brandImage',
      label: 'Brand Image',
      type: 'upload',
      relationTo: 'assets',
      admin: {
        description:
          'Default branded image for SEO metadata, social media cards, and general marketing materials.',
      },
    },
  ],
}
