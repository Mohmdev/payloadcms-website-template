import { postgresAdapter } from '@payloadcms/db-postgres'
import sharp from 'sharp' // sharp-import
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'

import { Categories } from './collections/Categories'
import { Pages } from './collections/Pages'
import { Posts } from './collections/Posts'
import { Users } from './collections/Users'
import { Media } from './collections/Media/Media'
import { Assets } from './collections/Media/Assets'
import { SiteInfo } from './Settings/config.SiteInfo'
import { ContactInfo } from './Settings/config.ContactInfo'
import { SiteGraphics } from './Settings/config.SiteGraphics'
import { Footer } from './Footer/config'
import { Header } from './Header/config'
import { plugins } from './plugins'
import { defaultLexical } from '@/fields/defaultLexical'
import { getServerSideURL } from './utilities/getURL'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    avatar: 'gravatar',
    components: {
      // Renders a message that you see while logging into your admin panel.
      beforeLogin: ['@/components/BeforeLogin'],
      // Renders the 'welcome' block that you see after logging into your admin panel.
      beforeDashboard: ['@/components/BeforeDashboard'],
      graphics: {
        // Image component to be displayed as the logo on the Sign Up / Login view.
        Logo: '/Settings/components/SiteLogo/admin.tsx#AdminLogo',
        // Image component displayed above the Nav in the admin panel
        // often a condensed version of a full logo.
        Icon: '/Settings/components/Favicon/admin.tsx#AdminFavicon',
      },
    },
    meta: {
      description: 'This is a custom meta description',
      // Images that will be displayed as the tab icon.
      icons: [
        {
          type: 'image/png',
          rel: 'icon',
          url: '/assets/favicon.svg',
        },
      ],
      // Images that will appear in the preview when...
      // you share links to your admin panel online and through social media.
      openGraph: {
        description: 'This is a custom OG description',
        images: [
          {
            height: 600,
            url: '/assets/ogImage.png',
            width: 800,
          },
        ],
        title: 'This is a custom OG title',
      },
      // Text that appends the meta/page title displayed in the browser tab.
      titleSuffix: '- Payload',
    },
    importMap: {
      baseDir: path.resolve(dirname),
    },
    user: Users.slug,
    livePreview: {
      breakpoints: [
        {
          label: 'Mobile',
          name: 'mobile',
          width: 375,
          height: 667,
        },
        {
          label: 'Tablet',
          name: 'tablet',
          width: 768,
          height: 1024,
        },
        {
          label: 'Desktop',
          name: 'desktop',
          width: 1440,
          height: 900,
        },
      ],
    },
  },
  editor: defaultLexical,
  db: postgresAdapter({
    pool: {
      connectionString: process.env.POSTGRES_URI,
    },
    // prodMigrations: migrations,
  }),

  graphQL: {
    schemaOutputFile: path.resolve(dirname, 'generated-schema.graphql'),
  },
  cors: [getServerSideURL()].filter(Boolean),
  collections: [
    //
    Pages,
    Posts,
    Categories,
    Users,
    Media,
    Assets,
  ],
  globals: [
    //
    SiteInfo,
    SiteGraphics,
    Header,
    Footer,
    ContactInfo,
  ],
  plugins: [...plugins],
  secret: process.env.PAYLOAD_SECRET,
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
})
