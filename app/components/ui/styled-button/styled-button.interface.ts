import { PropsWithChildrenAndClassName } from '@/types'

export type TButtonRole = 'button' | 'submit'
export type TButtonVariant = 'filled' | 'outlined' | 'disabled'

export interface IStyledButton extends PropsWithChildrenAndClassName<unknown> {
  type: TButtonRole
  variant: TButtonVariant
}

export interface IMiniStyledButton extends Omit<IStyledButton, 'variant'> {}
