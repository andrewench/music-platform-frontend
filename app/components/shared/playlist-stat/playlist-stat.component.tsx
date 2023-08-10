import { FC } from 'react'
import { IoHeadsetOutline, IoHeartOutline } from 'react-icons/io5'

import cn from 'clsx'

import { Flex } from '@/components/shared'

import { PropsWithClassName } from '@/shared/types'

import styles from './playlist-stat.module.scss'

interface IPlaylistStat {
  listeners: number
  likes: number
}

export const PlaylistStat: FC<PropsWithClassName<IPlaylistStat>> = ({
  listeners,
  likes,
  className,
}) => {
  return (
    <Flex className={cn(styles.box, className)}>
      <Flex align="center">
        <IoHeadsetOutline size={16} className={styles.icon} />
        <span>{listeners}</span>
      </Flex>

      <Flex align="center">
        <IoHeartOutline size={18} className={styles.icon} />
        <span>{likes}</span>
      </Flex>
    </Flex>
  )
}
