import { FC } from 'react'

import cn from 'clsx'

import { PropsWithChildrenAndClassName } from '@/shared/types'

import styles from './section-title.module.scss'

export const SectionTitle: FC<PropsWithChildrenAndClassName> = ({
  children,
  className,
}) => {
  return <h3 className={cn(styles.label, className)}>{children}</h3>
}
