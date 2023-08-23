import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { IoSunnyOutline } from 'react-icons/io5'

import { Flex } from '@/components/shared'

import styles from './theme-button.module.scss'

export const ThemeButton: FC = () => {
  const { t } = useTranslation()

  return (
    <button className={styles.button}>
      <Flex align="center" className={styles.box}>
        <IoSunnyOutline size={21} />
        <span>{t('sections.header.dropList.theme')}</span>
      </Flex>
    </button>
  )
}
