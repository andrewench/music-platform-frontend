import { ObjectSchema, object, string } from 'yup'

import { emailPattern } from '@/shared/patterns'

import { TRestoreField } from '@/types'

export const RestoreFieldsSchema: ObjectSchema<TRestoreField> = object({
  email: string().required('common.required').matches(emailPattern, {
    message: 'form.email.error',
  }),
})
