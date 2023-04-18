import { FC } from 'react'

import styles from './length-counter.module.scss'

export const LengthCounter: FC<{ length: number }> = ({ length }) => {
  if (!length) return null

  return <p className={styles.label}>{length}</p>
}
