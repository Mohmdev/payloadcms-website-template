import type { GlobalConfig } from 'payload'

import { revalidateContactInfo } from './hooks/revalidateContactInfo'

export const ContactInfo: GlobalConfig = {
  admin: {
    group: 'Settings',
  },
  slug: 'contact-information',
  label: 'Contact Information',
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [revalidateContactInfo],
  },
  fields: [
    {
      name: 'contactName',
      label: 'Contact Name',
      type: 'text',
    },
    {
      name: 'contactEmail',
      label: 'Email Address',
      type: 'text',
    },
    {
      name: 'contactPhone',
      label: 'Phone Number',
      type: 'text',
    },
    {
      name: 'contactAddress',
      label: 'Address',
      type: 'textarea',
    },
    {
      name: 'socialMedia',
      type: 'group',
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
}
