import type { GlobalAfterChangeHook } from 'payload'

import { revalidateTag } from 'next/cache'

export const revalidateSettings: GlobalAfterChangeHook = ({ doc, req: { payload } }) => {
  payload.logger.info(`Revalidating Settings...`)

  revalidateTag('global_settings')

  payload.logger.info(`Settings Revalidated.`)

  return doc
}
