import { FC } from 'react'
import cn from 'clsx'
import { useAtom } from 'jotai'
import { AvatarUploader } from '@/components/ui'
import { Image } from '@/components/shared'
import { preferencesAtom, userAtom } from '@/store'
import { Constants } from '@/shared/constants'
import styles from './avatar.module.scss'

export const Avatar: FC = () => {
  const [userData] = useAtom(userAtom)
  const [preferences] = useAtom(preferencesAtom)

  const avatarPath = userData.profile.avatar ?? Constants.DEFAULT_AVATAR_PATH
  const altImage = `${userData.profile.firstName} ${userData.profile.lastName}`

  return (
    <div
      className={cn(styles.avatar, {
        [styles.minimized]: !preferences.sideBar.open,
      })}
    >
      <Image src={avatarPath} alt={altImage} className={styles.image} />

      <AvatarUploader />
    </div>
  )
}
