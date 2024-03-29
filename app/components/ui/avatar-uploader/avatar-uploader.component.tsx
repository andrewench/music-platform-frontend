import { ImagePlus } from 'lucide-react'
import { FC } from 'react'

import cn from 'clsx'

import { app, user } from '@/store/slices'

import { useActions, useAppSelector } from '@/shared/hooks'

import styles from './avatar-uploader.module.scss'

export const AvatarUploader: FC = () => {
  const { data } = useAppSelector(user)
  const { sideBar } = useAppSelector(app)

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
        <ImagePlus size={16} strokeWidth={1.5} className={styles.uploadIcon} />
      </button>
    </div>
  )
}
