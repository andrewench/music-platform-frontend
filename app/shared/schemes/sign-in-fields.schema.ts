import { ObjectSchema, object, string } from 'yup'

import { loginPattern, passwordPattern } from '@/shared/patterns'

import { TSignInFields } from '@/shared/types'

export const SignInFieldsSchema: ObjectSchema<TSignInFields> = object({
  login: string().required('common.required').matches(loginPattern, {
    message: 'form.login.error',
  }),
  password: string().required('common.required').matches(passwordPattern, {
    message: 'form.password.error.incorrect',
  }),
})
