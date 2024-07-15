import { Headphones, Heart } from 'lucide-react'
import { FC } from 'react'
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
        <Headphones size={16} strokeWidth={1.5} className={styles.icon} />
        <span>{listeners}</span>
      </Flex>

      <Flex align="center">
        <Heart size={16} strokeWidth={1.5} className={styles.icon} />
        <span>{likes}</span>
      </Flex>
    </Flex>
  )
}
