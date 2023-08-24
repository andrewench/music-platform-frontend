import { FC } from 'react'
import { IoImageOutline } from 'react-icons/io5'

import cn from 'clsx'

import { user } from '@/store/slices'

import { useActions, useAppSelector } from '@/shared/hooks'

import styles from './avatar-uploader.module.scss'

export const AvatarUploader: FC = () => {
  const { data } = useAppSelector(user)

  const { toggleModal } = useActions()

  return (
    <div className={styles.box}>
      <button
        onClick={() =>
          toggleModal({
            name: 'avatarUploader',
            value: true,
          })
        }
        className={cn(styles.upload, {
          [styles.autoHide]: Boolean(data.avatar),
        })}
      >
        <IoImageOutline size={18} className={styles.uploadIcon} />
      </button>
    </div>
  )
}
