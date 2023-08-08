import { FC } from 'react'

import cn from 'clsx'

import { PropsWithChildrenAndClassName } from '@/shared/types'

import styles from './section-block.module.scss'

export const SectionBlock: FC<PropsWithChildrenAndClassName> = ({
  children,
  className,
}) => {
  return <div className={cn(styles.box, className)}>{children}</div>
}
