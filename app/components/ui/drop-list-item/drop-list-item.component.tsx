import { FC, ReactNode } from 'react'

import styles from './drop-list-item.module.scss'

export const DropListItem: FC<{ render: ReactNode }> = ({ render }) => {
  return <li className={styles.item}>{render}</li>
}
