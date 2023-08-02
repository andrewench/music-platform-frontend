import { ObjectSchema, object, string } from 'yup'

import { emailPattern, passwordPattern } from '@/shared/patterns'

import { TSignInFields } from '@/shared/types'

export const SignInFieldsSchema: ObjectSchema<TSignInFields> = object({
  email: string().required('common.required').matches(emailPattern, {
    message: 'form.email.error',
  }),
  password: string().required('common.required').matches(passwordPattern, {
    message: 'form.password.error.incorrect',
  }),
})
