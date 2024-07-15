import { FC } from 'react'
import { Image } from '@/components/shared'
import styles from './listener-face.module.scss'

type TListenerFace = Record<'src' | 'alt', string>

export const ListenerFace: FC<TListenerFace> = ({ src, alt }) => {
  return (
    <div className={styles.box}>
      <Image src={src} alt={alt} className={styles.image} />
      <span className={styles.status} />
    </div>
  )
}
