import { Sun } from 'lucide-react'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { Flex } from '@/components/shared'

import styles from './theme-button.module.scss'

export const ThemeButton: FC = () => {
  const { t } = useTranslation()

  return (
    <button className={styles.button}>
      <Flex align="center" className={styles.box}>
        <Sun size={20} strokeWidth={1.5} />
        <span>{t('sections.header.dropList.theme')}</span>
      </Flex>
    </button>
  )
}
