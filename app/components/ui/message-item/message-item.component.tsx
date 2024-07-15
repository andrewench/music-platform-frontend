import { FC } from 'react'
import styles from './message-item.module.scss'

interface IMessageItem {
  message: string
}

export const MessageItem: FC<IMessageItem> = ({ message }) => {
  return (
    <div className={styles.box}>
      <p className={styles.message}>{message}</p>
    </div>
  )
}
