import { FC } from 'react'

import cn from 'clsx'

import { StyledButton } from '@/components/ui'
import { IMiniStyledButton } from '@/components/ui/styled-button/styled-button.interface'

export const PrimaryButton: FC<IMiniStyledButton> = ({
  type,
  className,
  children,
}) => {
  return (
    <StyledButton type={type} variant="filled" className={cn(className)}>
      {children}
    </StyledButton>
  )
}
