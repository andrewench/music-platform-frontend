import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { HeaderLink } from '@/components/ui'

import { FlexContainer } from '@/components/shared'

import { headerLinksList } from '@/shared/data'

import styles from './header.module.scss'

export const Header: FC = () => {
  const { t } = useTranslation()

  return (
    <div className={styles.box}>
      <FlexContainer align="center" className={styles.links}>
        {headerLinksList.map((link, idx) => (
          <HeaderLink to={link.to} label={t(link.labelKey)} key={idx} />
        ))}
      </FlexContainer>
    </div>
  )
}
