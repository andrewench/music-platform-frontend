import { ObjectSchema, object, string } from 'yup'

import { TSignInFields } from '@/types'

import { emailPattern, passwordPattern } from '@/patterns'

export const SignInFieldsSchema: ObjectSchema<TSignInFields> = object({
  email: string().required('common.required').matches(emailPattern, {
    message: 'form.email.error',
  }),
  password: string().required('common.required').matches(passwordPattern, {
    message: 'form.password.error.incorrect',
  }),
})
