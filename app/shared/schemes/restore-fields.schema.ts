import { ObjectSchema, object, string } from 'yup'

import { Constants } from '@/shared/constants'

import { TRestoreField } from '@/shared/types'

const patterns = Constants.PATTERNS

export const RestoreFieldsSchema: ObjectSchema<TRestoreField> = object({
  email: string().required('common.required').matches(patterns.EMAIL, {
    message: 'form.email.error',
  }),
})
