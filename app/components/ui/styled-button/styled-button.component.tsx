import { FC } from 'react'

import cn from 'clsx'

import { IStyledButton } from './styled-button.interface'

import styles from './styled-button.module.scss'

export const StyledButton: FC<IStyledButton> = ({
  type,
  variant,
  className,
  children,
}) => {
  return (
    <button
      type={type}
      className={cn(
        styles.button,
        {
          [styles.filled]: variant === 'filled',
          [styles.outlined]: variant === 'outlined',
          [styles.disabled]: variant === 'disabled',
        },
        className
      )}
      disabled={variant === 'disabled'}
    >
      {children}
    </button>
  )
}
