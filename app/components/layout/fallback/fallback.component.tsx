import { FC } from 'react'
import cn from 'clsx'
import styles from './fallback.module.scss'

export const Fallback: FC<{ type: 'screen' | 'view' }> = ({ type }) => {
  return (
    <div
      className={cn(styles.spinner, {
        [styles.screen]: type === 'screen',
        [styles.view]: type === 'view',
      })}
    />
  )
}
