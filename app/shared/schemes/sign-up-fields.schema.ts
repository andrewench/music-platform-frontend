import { ObjectSchema, object, ref, string } from 'yup'

import { Constants } from '@/shared/constants'

import { TSignUpFormFields } from '@/shared/types'

const patterns = Constants.PATTERNS

export const SignUpFieldsSchema: ObjectSchema<TSignUpFormFields> = object({
  firstName: string()
    .required('common.required')
    .min(2, 'form.firstName.error.length')
    .max(24, 'form.firstName.error.length')
    .matches(patterns.FIRST_NAME, 'form.firstName.error.onlyWords'),
  lastName: string()
    .required('common.required')
    .min(2, 'form.lastName.error.length')
    .max(30, 'form.lastName.error.length')
    .matches(patterns.LAST_NAME, {
      message: 'form.lastName.error.onlyWords',
    }),
  login: string()
    .required('common.required')
    .min(5, 'form.login.error.length')
    .matches(patterns.LOGIN, {
      message: 'form.login.error.incorrect',
    }),
  email: string().required('common.required').matches(patterns.EMAIL, {
    message: 'form.email.error',
  }),
  password: string().required('common.required').matches(patterns.PASSWORD, {
    message: 'form.password.error.incorrect',
  }),
  confirm: string()
    .required('common.required')
    .oneOf([ref('password')], 'form.password.error.match'),
})
