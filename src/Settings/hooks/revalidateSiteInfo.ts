import type { GlobalAfterChangeHook } from 'payload'

import { revalidateTag } from 'next/cache'

export const revalidateSiteInfo: GlobalAfterChangeHook = ({ doc, req: { payload } }) => {
  payload.logger.info(`Revalidating site info...`)

  revalidateTag('global_site-info')

  payload.logger.info(`Site info revalidated.`)

  return doc
}
