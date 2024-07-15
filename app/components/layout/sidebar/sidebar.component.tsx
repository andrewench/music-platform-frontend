import { ChevronLeft, Copy } from 'lucide-react'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import cn from 'clsx'
import { SideBarItem } from '@/components/ui'
import { Flex } from '@/components/shared'
import { app, user } from '@/store/slices'
import { useActions, useAppSelector } from '@/shared/hooks'
import { Avatar } from './avatar/avatar.component'
import { sideBarItemsList } from './sidebar-items.data'
import styles from './sidebar.module.scss'

export const SideBar: FC = () => {
  const { t } = useTranslation()

  const { sideBar } = useAppSelector(app)
  const { data } = useAppSelector(user)

  const { toggleSideBar } = useActions()

  return (
    <div
      className={cn(styles.box, {
        [styles.minimized]: !sideBar.isOpen,
      })}
    >
      <button
        onClick={() => toggleSideBar()}
        className={cn(styles.toggleSidebar, {
          [styles.bottom]: !sideBar.isOpen,
        })}
      >
        <ChevronLeft size={18} strokeWidth={1.5} />
      </button>

      <Avatar />

      <div
        className={cn(styles.list, {
          [styles.minimized]: !sideBar.isOpen,
        })}
      >
        <div
          className={cn(styles.username, {
            'visually-hidden': !sideBar.isOpen,
          })}
        >{`${data.firstName} ${data.lastName}`}</div>

        {data.nickname && (
          <Flex align="center" className={styles.nickname}>
            <p>@{data.nickname}</p>

            <button>
              <Copy size={14} strokeWidth={1.5} className={styles.icon} />
            </button>
          </Flex>
        )}

        <ul
          className={cn(styles.menu, {
            [styles.minimized]: !sideBar.isOpen,
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
