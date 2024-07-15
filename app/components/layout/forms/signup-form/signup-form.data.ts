import { ITextField } from '@/components/ui/text-field/text-field.interface'
import { TSignUpFormFields } from '@/shared/types'

type TSignUpFieldsList = Omit<
  ITextField<TSignUpFormFields>,
  'register' | 'isDebounced' | 'onChange' | 'className'
>

export const SignUpFieldsList: TSignUpFieldsList[] = [
  {
    type: 'text',
    fieldState: 'firstName',
    label: 'form.firstName.fieldName',
    isCount: true,
    minLength: 2,
    maxLength: 24,
  },
  {
    type: 'text',
    fieldState: 'lastName',
    label: 'form.lastName.fieldName',
    isCount: true,
    minLength: 2,
    maxLength: 24,
  },
  {
    type: 'text',
    fieldState: 'login',
    label: 'form.login.fieldName',
    minLength: 5,
    maxLength: 16,
  },
  {
    type: 'email',
    fieldState: 'email',
    label: 'form.email.fieldName',
  },
  {
    type: 'password',
    fieldState: 'password',
    label: 'form.password.fieldName',
    isCount: true,
    minLength: 8,
    maxLength: 32,
  },
  {
    type: 'password',
    fieldState: 'confirm',
    label: 'form.confirm.fieldName',
    isCount: true,
    minLength: 8,
    maxLength: 32,
  },
]
