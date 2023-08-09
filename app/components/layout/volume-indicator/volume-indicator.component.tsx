import { FC } from 'react'

import { ProgressIndicator } from '@/components/ui'

import { VolumeIcon } from '@/components/icons'

import { Flex } from '@/components/shared'

import styles from './volume-indicator.module.scss'

export const VolumeIndicator: FC = () => {
  return (
    <Flex align="center" content="end" className={styles.box}>
      <VolumeIcon />

      <ProgressIndicator percent={37} maxWidth={100} />
    </Flex>
  )
}
