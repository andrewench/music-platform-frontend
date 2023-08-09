import { FC } from 'react'

import { AudioButton, ProgressIndicator } from '@/components/ui'

import { LoopIcon, PlayIcon, ShuffleIcon, SwitchIcon } from '@/components/icons'

import { Flex } from '@/components/shared'

import styles from './audio-player.module.scss'

export const AudioPlayer: FC = () => {
  return (
    <Flex direction="column" align="center" className={styles.wrap}>
      <Flex align="center" className={styles.box}>
        <AudioButton icon={<ShuffleIcon />} />
        <AudioButton icon={<SwitchIcon type="prev" />} />
        <AudioButton icon={<PlayIcon />} />
        <AudioButton icon={<SwitchIcon type="next" />} />
        <AudioButton icon={<LoopIcon />} />
      </Flex>

      <Flex align="center" className={styles.bar}>
        <p className={styles.time}>1:33</p>

        <ProgressIndicator percent={76} maxWidth={380} />

        <p className={styles.time}>3:03</p>
      </Flex>
    </Flex>
  )
}
