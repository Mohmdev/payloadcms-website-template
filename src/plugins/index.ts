import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { Plugin } from 'payload'
import { s3StoragePlugin } from './s3Storage'
import { redirectsPluginConfig } from './redirects'
import { nestedDocsPluginConfig } from './nestedDocs'
import { seoPluginConfig } from './seo'
import { formBuilderPluginConfig } from './formBuilder'
import { searchPluginConfig } from './search'

export const plugins: Plugin[] = [
  s3StoragePlugin,
  redirectsPluginConfig,
  nestedDocsPluginConfig,
  seoPluginConfig,
  formBuilderPluginConfig,
  searchPluginConfig,
  payloadCloudPlugin(),
]
