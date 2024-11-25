import type { GlobalAfterChangeHook } from 'payload'

import { revalidateTag } from 'next/cache'

export const revalidateGraphics: GlobalAfterChangeHook = ({ doc, req: { payload } }) => {
  payload.logger.info(`Revalidating site's graphic settings...`)

  revalidateTag('global_graphics')

  payload.logger.info(`Site graphic settings revalidated.`)

  return doc
}
