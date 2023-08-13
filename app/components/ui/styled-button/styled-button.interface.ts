import { PropsWithChildrenAndClassName } from '@/shared/types'

export type TButtonRole = 'button' | 'submit'
export type TButtonVariant = 'filled' | 'outlined' | 'disabled'

export interface IStyledButton extends PropsWithChildrenAndClassName<unknown> {
  type: TButtonRole
  variant: TButtonVariant
  onClick?: () => void
}

export interface IMiniStyledButton extends Omit<IStyledButton, 'variant'> {}
