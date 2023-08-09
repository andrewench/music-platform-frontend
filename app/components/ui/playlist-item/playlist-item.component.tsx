import { FC } from 'react'
import { IoHeadsetOutline, IoHeartOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'

import { Flex, Image } from '@/components/shared'

import styles from './playlist-item.module.scss'

interface IPlaylistItem {
  to: string
  imageSrc: string
  imageAlt?: string
  label: string
}

export const PlaylistItem: FC<IPlaylistItem> = ({
  to,
  imageSrc,
  imageAlt,
  label,
}) => {
  return (
    <Link to={to} draggable={false} className={styles.box}>
      <div className={styles.coverWrap}>
        <Image
          src={imageSrc}
          alt={imageAlt ?? label}
          className={styles.cover}
        />

        <Flex align="center" content="center" className={styles.meta}>
          <Flex align="center">
            <IoHeadsetOutline size={16} className={styles.icon} />
            <span>120</span>
          </Flex>

          <Flex align="center">
            <IoHeartOutline size={18} className={styles.icon} />
            <span>11k</span>
          </Flex>
        </Flex>
      </div>

      <p className={styles.label}>{label}</p>
    </Link>
  )
}
