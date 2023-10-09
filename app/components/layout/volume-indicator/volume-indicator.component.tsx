import { FC, useEffect, useState } from 'react'
import { FiVolumeX } from 'react-icons/fi'
import {
  IoVolumeHighOutline,
  IoVolumeLowOutline,
  IoVolumeMediumOutline,
} from 'react-icons/io5'

import { ProgressIndicator } from '@/components/ui'

import { Flex } from '@/components/shared'

import { app } from '@/store/slices'

import { useActions, useAppSelector } from '@/shared/hooks'

import styles from './volume-indicator.module.scss'

const RenderedVolumeIcon: FC<{
  progress: number
  isMuted: boolean
}> = ({ progress, isMuted }) => {
  if (!isMuted && progress >= 75)
    return <IoVolumeHighOutline size={24} className={styles.icon} />

  if (!isMuted && progress > 35)
    return <IoVolumeMediumOutline size={24} className={styles.icon} />

  return isMuted ? (
    <FiVolumeX size={24} className={styles.muteIcon} />
  ) : (
    <IoVolumeLowOutline size={24} className={styles.icon} />
  )
}

export const VolumeIndicator: FC = () => {
  const [progress, setProgress] = useState<number>(0)

  const { audioPlayer } = useAppSelector(app)

  const { setVolume, toggleMutedVolume } = useActions()

  useEffect(() => {
    if (!audioPlayer.isMuted) {
      setVolume(progress)
    }
  }, [audioPlayer.isMuted, progress, setVolume])

  return (
    <Flex align="center" content="end" className={styles.box}>
      <button type="button" onClick={() => toggleMutedVolume()}>
        <RenderedVolumeIcon progress={progress} isMuted={audioPlayer.isMuted} />
      </button>

      <ProgressIndicator
        percent={audioPlayer.volume}
        maxWidth={100}
        setProgress={setProgress}
        forceUpdateFlag={audioPlayer.isMuted}
      />
    </Flex>
  )
}
