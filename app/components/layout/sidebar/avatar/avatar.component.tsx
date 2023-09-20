import { FC } from 'react'

import cn from 'clsx'

import { AvatarUploader } from '@/components/ui'

import { Image } from '@/components/shared'

import { AppConstant } from '@/shared/constants'

import { useMultipleSelector } from '@/shared/hooks'

import styles from './avatar.module.scss'

export const Avatar: FC = () => {
  const {
    user: { data },
    app: { sideBar },
  } = useMultipleSelector()

  return (
    <div
      className={cn(styles.avatar, {
        [styles.minimized]: !sideBar.isOpen,
      })}
    >
      <Image
        src={data.avatar ?? AppConstant.DEFAULT_AVATAR_PATH}
        alt="Avatar"
        className={styles.image}
      />

      <AvatarUploader />
    </div>
  )
}
