import type { GlobalConfig } from 'payload'
import { revalidateSettings } from './hooks/revalidateSettings'

const Settings: GlobalConfig = {
  slug: 'settings',
  label: 'Settings',
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [revalidateSettings],
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
    {
      name: 'siteLogo',
      label: 'Site Logo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'favicon',
      label: 'Favicon',
      type: 'upload',
      relationTo: 'media',
    },
    {
      type: 'tabs',
      tabs: [
        // Contact Information
        {
          name: 'contact',
          label: 'Contact Information',
          fields: [
            {
              name: 'email',
              label: 'Email Address',
              type: 'text',
            },
            {
              name: 'phone',
              label: 'Phone Number',
              type: 'text',
            },
            {
              name: 'address',
              label: 'Address',
              type: 'textarea',
            },
          ],
        },
        // Social Media
        {
          name: 'social',
          label: 'Social Media',
          fields: [
            {
              name: 'facebook',
              label: 'Facebook',
              type: 'text',
            },
            {
              name: 'twitter',
              label: 'Twitter',
              type: 'text',
            },
            {
              name: 'instagram',
              label: 'Instagram',
              type: 'text',
            },
            {
              name: 'linkedin',
              label: 'LinkedIn',
              type: 'text',
            },
            {
              name: 'youtube',
              label: 'YouTube',
              type: 'text',
            },
            {
              name: 'whatsapp',
              label: 'WhatsApp',
              type: 'text',
            },
            {
              name: 'telegram',
              label: 'Telegram',
              type: 'text',
            },
          ],
        },
      ],
    },
  ],
}

export { Settings }
