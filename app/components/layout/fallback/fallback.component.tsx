import { FC } from 'react'

import styles from './fallback.module.scss'

export const Fallback: FC = () => {
  return <div className={styles.spinner} />
}
