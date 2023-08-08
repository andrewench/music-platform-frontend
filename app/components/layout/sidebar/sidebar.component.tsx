import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { IoCopyOutline } from 'react-icons/io5'

import cn from 'clsx'

import { SideBarItem } from '@/components/ui'

import { FlexContainer } from '@/components/shared'

import { sideBarItemsList } from '@/shared/data'

import styles from './sidebar.module.scss'

export const SideBar: FC = () => {
  const { t } = useTranslation()

  return (
    <div className={cn(styles.box)}>
      <div className={styles.avatar}>
        <img
          src="/images/avatar.jpg"
          alt="Avatar"
          className={styles.image}
          draggable={false}
        />
      </div>

      <div className={styles.list}>
        <div className={styles.username}>Jessie Carrillo</div>

        <FlexContainer align="center" className={styles.nickname}>
          <p>@jessie_carrillo</p>

          <button>
            <IoCopyOutline size={14} className={styles.icon} />
          </button>
        </FlexContainer>

        <ul className={styles.menu}>
          {sideBarItemsList.map(({ labelKey, ...props }, idx) => (
            <SideBarItem label={t(labelKey)} {...props} key={idx} />
          ))}
        </ul>
      </div>
    </div>
  )
}
