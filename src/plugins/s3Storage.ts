import { s3Storage } from '@payloadcms/storage-s3'

export const s3StoragePlugin = s3Storage({
  collections: {
    media: {
      prefix: 'media',
      disableLocalStorage: true,
    },
    assets: {
      prefix: 'assets',
      disableLocalStorage: true,
    },
  },
  acl: 'private',
  bucket: process.env.S3_BUCKET as string,
  config: {
    endpoint: process.env.S3_ENDPOINT,
    forcePathStyle: true,
    region: 'us-east-1', // Dummy region to avoid error
    credentials: {
      accessKeyId: process.env.S3_ACCESS_KEY as string,
      secretAccessKey: process.env.S3_SECRET_KEY as string,
    },
  },
})
