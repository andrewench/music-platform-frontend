import { ChangeEvent } from 'react'
import { FieldValues, Path, UseFormRegister } from 'react-hook-form'

import { PropsWithClassName } from '@/shared/types'

export type TTextFieldRole = 'text' | 'email' | 'password' | 'search'

export interface ITextField<T extends FieldValues>
  extends PropsWithClassName<unknown> {
  label: string
  type: TTextFieldRole
  fieldState: Path<T>
  minLength?: number
  maxLength?: number
  register: UseFormRegister<T>
  isDebounced?: boolean
  isCount?: boolean
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}
