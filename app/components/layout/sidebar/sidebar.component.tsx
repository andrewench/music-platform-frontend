import { ChevronLeft, Copy } from 'lucide-react'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import cn from 'clsx'
import { useAtom } from 'jotai'
import { SideBarItem } from '@/components/ui'
import { Flex } from '@/components/shared'
import { preferencesAtom, userAtom } from '@/store'
import { Avatar } from './avatar/avatar.component'
import { sideBarItemsList } from './sidebar-items.data'
import styles from './sidebar.module.scss'

export const SideBar: FC = () => {
  const { t } = useTranslation()

  const [userData] = useAtom(userAtom)
  const [preferences, setPreferences] = useAtom(preferencesAtom)

  const isSideBarOpen = preferences.sideBar.open

  return (
    <div
      className={cn(styles.box, {
        [styles.minimized]: !isSideBarOpen,
      })}
    >
      <button
        onClick={() => {
          setPreferences({
            ...preferences,
            sideBar: {
              open: !isSideBarOpen,
            },
          })
        }}
        className={cn(styles.toggleSidebar, {
          [styles.bottom]: !isSideBarOpen,
        })}
      >
        <ChevronLeft size={18} strokeWidth={1.5} />
      </button>

      <Avatar />

      <div
        className={cn(styles.list, {
          [styles.minimized]: !isSideBarOpen,
        })}
      >
        <div
          className={cn(styles.username, {
            'visually-hidden': !isSideBarOpen,
          })}
        >{`${userData.profile.firstName} ${userData.profile.lastName}`}</div>

        {userData.profile.nickname && (
          <Flex align="center" className={styles.nickname}>
            <p>@{userData.profile.nickname}</p>

            <button>
              <Copy size={14} strokeWidth={1.5} className={styles.icon} />
            </button>
          </Flex>
        )}

        <ul
          className={cn(styles.menu, {
            [styles.minimized]: !isSideBarOpen,
          })}
        >
          {sideBarItemsList.map(({ labelKey, ...props }, idx) => (
            <SideBarItem label={t(labelKey)} {...props} key={idx} />
          ))}
        </ul>
      </div>
    </div>
  )
}
