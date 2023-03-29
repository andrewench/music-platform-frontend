import { FC } from 'react'

import cn from 'clsx'

import { StyledButton } from '../styled-button/styled-button.component'

import { IMiniStyledButton } from '../styled-button/styled-button.interface'

export const SecondaryButton: FC<IMiniStyledButton> = ({
  type,
  className,
  children,
}) => {
  return (
    <StyledButton type={type} variant="outlined" className={cn(className)}>
      {children}
    </StyledButton>
  )
}
