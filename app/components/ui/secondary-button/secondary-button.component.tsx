import { FC } from 'react'
import cn from 'clsx'
import { StyledButton } from '@/components/ui/styled-button/styled-button.component'
import { IMiniStyledButton } from '@/components/ui/styled-button/styled-button.interface'

export const SecondaryButton: FC<IMiniStyledButton> = ({
  type,
  onClick,
  className,
  children,
}) => {
  return (
    <StyledButton
      type={type}
      variant="outlined"
      onClick={onClick}
      className={cn(className)}
    >
      {children}
    </StyledButton>
  )
}
