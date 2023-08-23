import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { HeaderLink } from '@/components/ui'

import { Flex } from '@/components/shared'

import { headerLinksList } from '@/shared/data'

import { HeaderDropList } from './header-drop-list/header-drop-list.component'

import styles from './header.module.scss'

export const Header: FC = () => {
  const { t } = useTranslation()

  return (
    <div className={styles.box}>
      <Flex align="center" content="between" className={styles.wrap}>
        <Flex align="center" className={styles.links}>
          {headerLinksList.map((link, idx) => (
            <HeaderLink to={link.to} label={t(link.labelKey)} key={idx} />
          ))}
        </Flex>

        <HeaderDropList />
      </Flex>
    </div>
  )
}
