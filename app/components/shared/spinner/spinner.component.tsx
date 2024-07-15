import { FC } from 'react'
import cn from 'clsx'
import { PropsWithClassName } from '@/shared/types'
import styles from './spinner.module.scss'

type ISpinnerSize = 'small' | 'medium' | 'large'

export const Spinner: FC<PropsWithClassName<{ size?: ISpinnerSize }>> = ({
  size = 'small',
  className,
}) => {
  return (
    <div
      className={cn(
        styles.box,
        {
          [styles.small]: size === 'small',
          [styles.medium]: size === 'medium',
          [styles.large]: size === 'large',
        },
        className
      )}
    />
  )
}
