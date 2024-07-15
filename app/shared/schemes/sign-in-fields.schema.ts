import { ObjectSchema, object, string } from 'yup'
import { Constants } from '@/shared/constants'
import { TSignInFields } from '@/shared/types'

const patterns = Constants.PATTERNS

export const SignInFieldsSchema: ObjectSchema<TSignInFields> = object({
  login: string().required('common.required').matches(patterns.LOGIN, {
    message: 'form.login.error',
  }),
  password: string().required('common.required').matches(patterns.PASSWORD, {
    message: 'form.password.error.incorrect',
  }),
})
