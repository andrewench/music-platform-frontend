import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Image, PlaylistStat } from '@/components/shared'
import styles from './playlist-item.module.scss'

interface IPlaylistItem {
  to: string
  label: string
  imageSrc: string
  imageAlt?: string
}

export const PlaylistItem: FC<IPlaylistItem> = ({
  to,
  label,
  imageSrc,
  imageAlt,
}) => {
  return (
    <Link to={to} draggable={false} className={styles.box}>
      <div className={styles.coverWrap}>
        <Image
          src={imageSrc}
          alt={imageAlt ?? label}
          className={styles.cover}
        />

        <PlaylistStat listeners={120} likes={11} className={styles.meta} />
      </div>

      <p className={styles.label}>{label}</p>
    </Link>
  )
}
