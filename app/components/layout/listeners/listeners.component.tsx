import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { ListenerFace } from '@/components/ui'

import { Flex } from '@/components/shared'

import styles from './listeners.module.scss'

export const Listeners: FC = () => {
  const { t } = useTranslation()

  return (
    <div className={styles.box}>
      <p className={styles.label}>{t('sections.listeners.listeningNow')}:</p>

      <Flex>
        <ListenerFace src="/images/user_1.jpg" alt="User" />
        <ListenerFace src="/images/user_2.jpg" alt="User" />
        <ListenerFace src="/images/user_3.jpg" alt="User" />
        <ListenerFace src="/images/user_4.jpg" alt="User" />
      </Flex>
    </div>
  )
}
