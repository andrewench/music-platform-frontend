import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { IoChevronBackOutline, IoCopyOutline } from 'react-icons/io5'

import cn from 'clsx'

import { SideBarItem } from '@/components/ui'

import { Flex } from '@/components/shared'

import { sideBarItemsList } from '@/shared/data'

import { useActions, useMultipleSelector } from '@/shared/hooks'

import { Avatar } from './avatar/avatar.component'

import styles from './sidebar.module.scss'

export const SideBar: FC = () => {
  const { t } = useTranslation()

  const {
    app: { sideBar },
    user: { data },
  } = useMultipleSelector()

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
        <IoChevronBackOutline size={18} />
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
              <IoCopyOutline size={14} className={styles.icon} />
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
