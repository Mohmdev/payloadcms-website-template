import type { GlobalAfterChangeHook } from 'payload'

import { revalidateTag } from 'next/cache'

export const revalidateContactInfo: GlobalAfterChangeHook = ({ doc, req: { payload } }) => {
  payload.logger.info(`Revalidating contact information...`)

  revalidateTag('global_contact-info')

  payload.logger.info(`Contact information revalidated.`)

  return doc
}
