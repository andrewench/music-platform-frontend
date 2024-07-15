import { FC } from 'react'
import cn from 'clsx'
import { StyledButton } from '@/components/ui'
import {
  IMiniStyledButton,
  IStyledButton,
} from '@/components/ui/styled-button/styled-button.interface'

export const PrimaryButton: FC<
  IMiniStyledButton & { variant?: IStyledButton['variant'] }
> = ({ type, onClick, variant, className, children }) => {
  return (
    <StyledButton
      type={type}
      variant={variant ?? 'filled'}
      onClick={onClick}
      className={cn(className)}
    >
      {children}
    </StyledButton>
  )
}
