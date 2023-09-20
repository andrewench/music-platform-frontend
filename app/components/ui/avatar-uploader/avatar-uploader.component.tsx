import { FC } from 'react'
import { IoImageOutline } from 'react-icons/io5'

import cn from 'clsx'

import { useActions, useMultipleSelector } from '@/shared/hooks'

import styles from './avatar-uploader.module.scss'

export const AvatarUploader: FC = () => {
  const {
    user: { data },
    app: { sideBar },
  } = useMultipleSelector()

  const { toggleModal } = useActions()

  return (
    <div
      className={cn(styles.box, {
        'visually-hidden': !sideBar.isOpen,
      })}
    >
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
