import { Languages } from 'lucide-react'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Flex } from '@/components/shared'
import styles from './language-button.module.scss'

export const LanguageButton: FC = () => {
  const { t } = useTranslation()

  return (
    <button className={styles.button}>
      <Flex align="center" className={styles.box}>
        <Languages size={20} strokeWidth={1.5} />
        <span>{t('sections.header.dropList.language')}</span>
      </Flex>
    </button>
  )
}
