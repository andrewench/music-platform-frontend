import { FC } from 'react'

import cn from 'clsx'

import { AvatarUploader } from '@/components/ui'

import { Image } from '@/components/shared'

import { app, user } from '@/store/slices'

import { Constants } from '@/shared/constants'

import { useAppSelector } from '@/shared/hooks'

import styles from './avatar.module.scss'

export const Avatar: FC = () => {
  const { data } = useAppSelector(user)
  const { sideBar } = useAppSelector(app)

  return (
    <div
      className={cn(styles.avatar, {
        [styles.minimized]: !sideBar.isOpen,
      })}
    >
      <Image
        src={data.avatar ?? Constants.DEFAULT_AVATAR_PATH}
        alt="Avatar"
        className={styles.image}
      />

      <AvatarUploader />
    </div>
  )
}
