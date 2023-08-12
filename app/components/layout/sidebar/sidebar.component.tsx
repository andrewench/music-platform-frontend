import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { IoCopyOutline } from 'react-icons/io5'

import cn from 'clsx'

import { SideBarItem } from '@/components/ui'

import { Flex, Image } from '@/components/shared'

import { user } from '@/store/slices'

import { sideBarItemsList } from '@/shared/data'

import { useAppSelector } from '@/shared/hooks'

import styles from './sidebar.module.scss'

export const SideBar: FC = () => {
  const { t } = useTranslation()

  const { data } = useAppSelector(user)

  return (
    <div className={cn(styles.box)}>
      <div className={styles.avatar}>
        <Image src="/images/avatar.jpg" alt="Avatar" className={styles.image} />
      </div>

      <div className={styles.list}>
        <div
          className={styles.username}
        >{`${data.firstName} ${data.lastName}`}</div>

        {data.nickname && (
          <Flex align="center" className={styles.nickname}>
            <p>@{data.nickname}</p>

            <button>
              <IoCopyOutline size={14} className={styles.icon} />
            </button>
          </Flex>
        )}

        <ul className={styles.menu}>
          {sideBarItemsList.map(({ labelKey, ...props }, idx) => (
            <SideBarItem label={t(labelKey)} {...props} key={idx} />
          ))}
        </ul>
      </div>
    </div>
  )
}
