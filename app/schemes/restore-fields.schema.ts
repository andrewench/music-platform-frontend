import { ObjectSchema, object, string } from 'yup'

import { TRestoreField } from '@/types'

import { emailPattern } from '@/patterns'

export const RestoreFieldsSchema: ObjectSchema<TRestoreField> = object({
  email: string().required('common.required').matches(emailPattern, {
    message: 'form.email.error',
  }),
})
