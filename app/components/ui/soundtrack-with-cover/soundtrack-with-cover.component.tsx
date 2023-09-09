import { FC } from 'react'

import { Image } from '@/components/shared'

import styles from './soundtrack-with-cover.module.scss'

interface ISoundtrack {
  src: string
  alt: string
  name: string
}

export const SoundtrackWithCover: FC<ISoundtrack> = ({ src, alt, name }) => {
  return (
    <div className={styles.box}>
      <div className={styles.cover}>
        <Image
          src={src}
          alt={alt}
          width={60}
          height={60}
          className={styles.image}
        />
      </div>

      <p className={styles.name}>{name}</p>
    </div>
  )
}
