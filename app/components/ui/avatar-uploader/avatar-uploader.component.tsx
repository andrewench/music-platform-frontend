import { ImagePlus } from 'lucide-react'
import cn from 'clsx'
import { useAtom } from 'jotai'
import { modalsAtom, preferencesAtom, userAtom } from '@/store'
import styles from './avatar-uploader.module.scss'

export const AvatarUploader = () => {
  const [preferences] = useAtom(preferencesAtom)
  const [modals, setModals] = useAtom(modalsAtom)
  const [userData] = useAtom(userAtom)

  const openModalHandler = () => {
    setModals({
      ...modals,
      avatar: {
        open: true,
      },
    })
  }

  return (
    <div
      className={cn(styles.box, {
        'visually-hidden': !preferences.sideBar.open,
      })}
    >
      <button
        onClick={openModalHandler}
        className={cn(styles.upload, {
          [styles.autoHide]: Boolean(userData.profile.avatar),
        })}
      >
        <ImagePlus size={16} strokeWidth={1.5} className={styles.uploadIcon} />
      </button>
    </div>
  )
}
