import { ObjectSchema, object, ref, string } from 'yup'

import {
  emailPattern,
  loginPattern,
  namePattern,
  passwordPattern,
} from '@/shared/patterns'

import { TSignUpFormFields } from '@/shared/types'

export const SignUpFieldsSchema: ObjectSchema<TSignUpFormFields> = object({
  firstName: string()
    .required('common.required')
    .min(2, 'form.firstName.error.length')
    .max(24, 'form.firstName.error.length')
    .matches(namePattern, 'form.firstName.error.onlyWords'),
  lastName: string()
    .required('common.required')
    .min(2, 'form.lastName.error.length')
    .max(30, 'form.lastName.error.length')
    .matches(namePattern, {
      message: 'form.lastName.error.onlyWords',
    }),
  login: string()
    .required('common.required')
    .min(5, 'form.login.error.length')
    .matches(loginPattern, {
      message: 'form.login.error.incorrect',
    }),
  email: string().required('common.required').matches(emailPattern, {
    message: 'form.email.error',
  }),
  password: string().required('common.required').matches(passwordPattern, {
    message: 'form.password.error.incorrect',
  }),
  confirm: string()
    .required('common.required')
    .oneOf([ref('password')], 'form.password.error.match'),
})
