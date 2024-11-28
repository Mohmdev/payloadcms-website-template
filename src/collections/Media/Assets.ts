import type { CollectionConfig } from 'payload'

import path from 'path'
import { fileURLToPath } from 'url'

import { anyone } from '../../access/anyone'
import { authenticated } from '../../access/authenticated'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export const Assets: CollectionConfig = {
  admin: {
    group: 'Cloud Storage',
  },
  slug: 'assets',
  labels: {
    singular: 'Graphics',
    plural: 'Graphics',
  },
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
    },
    {
      name: 'caption',
      type: 'textarea',
    },
  ],
  upload: {
    crop: true,
    displayPreview: true,
    focalPoint: true,
    disableLocalStorage: true,
    staticDir: path.resolve(dirname, '../../public/assets'),
  },
}
