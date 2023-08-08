import { FC } from 'react'
import SimpleBar from 'simplebar-react'

import cn from 'clsx'

import { PropsWithChildrenAndClassName } from '@/shared/types'

import styles from './view-layout.module.scss'

export const ViewLayout: FC<PropsWithChildrenAndClassName> = ({
  children,
  className,
}) => {
  return (
    <SimpleBar className={styles.scrollBar}>
      <div className={cn(styles.box, className)}>{children}</div>
    </SimpleBar>
  )
}
