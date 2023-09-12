import { FC, ReactNode } from 'react'

import { Flex } from '@/components/shared'

import styles from './fallback-view.module.scss'

interface IFallbackView {
  label: string
  icon: ReactNode
}

export const FallbackView: FC<IFallbackView> = ({ label, icon }) => {
  return (
    <Flex
      direction="column"
      align="center"
      content="center"
      className={styles.box}
    >
      <p className={styles.label}>{label}</p>
      <span className={styles.icon}>{icon}</span>
    </Flex>
  )
}
