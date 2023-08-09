import { FC } from 'react'

import { AudioPlayer, Listeners, VolumeIndicator } from '@/components/layout'

import { Flex } from '@/components/shared'

import styles from './footer.module.scss'

export const Footer: FC = () => {
  return (
    <Flex content="between" align="center" className={styles.box}>
      <Listeners />
      <AudioPlayer />
      <VolumeIndicator />
    </Flex>
  )
}
