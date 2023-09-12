import { FC } from 'react'
import { Link } from 'react-router-dom'

import { Flex, Image } from '@/components/shared'

import styles from './chat-item.module.scss'

interface IChatItem {
  link: {
    href: string
  }
  avatar: string
}

export const ChatItem: FC<IChatItem> = ({ link, avatar }) => {
  return (
    <Link to={link.href}>
      <Flex className={styles.chatItem}>
        <div className={styles.cover}>
          <Image
            src={avatar}
            alt="Avatar"
            width={50}
            height={50}
            className={styles.image}
          />
        </div>

        <div className={styles.meta}>
          <p className={styles.username}>Jessie Carrillo</p>

          <p className={styles.message}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
        </div>
      </Flex>
    </Link>
  )
}
