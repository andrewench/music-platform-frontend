import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { IoLanguageOutline } from 'react-icons/io5'

import { Flex } from '@/components/shared'

import styles from './language-button.module.scss'

export const LanguageButton: FC = () => {
  const { t } = useTranslation()

  return (
    <button className={styles.button}>
      <Flex align="center" className={styles.box}>
        <IoLanguageOutline size={21} />
        <span>{t('sections.header.dropList.language')}</span>
      </Flex>
    </button>
  )
}
