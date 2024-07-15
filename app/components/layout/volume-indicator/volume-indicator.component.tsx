import { Volume1, Volume2, VolumeX } from 'lucide-react'
import { FC, useState } from 'react'
import { useAtom } from 'jotai'
import { ProgressIndicator } from '@/components/ui'
import { Flex } from '@/components/shared'
import { audioPlayerAtom } from '@/store'
import styles from './volume-indicator.module.scss'

const RenderedVolumeIcon: FC<{
  progress: number
  isMuted: boolean
}> = ({ progress, isMuted }) => {
  const props = {
    size: 20,
    strokeWidth: 1.5,
    className: styles.icon,
  }

  if (!isMuted && progress >= 50) return <Volume2 {...props} />

  return isMuted ? <VolumeX {...props} /> : <Volume1 {...props} />
}

export const VolumeIndicator = () => {
  const [progress, setProgress] = useState<number>(0)
  const [audioPlayer, setAudioPlayer] = useAtom(audioPlayerAtom)

  const toggleMutedVolumeHandler = () => {
    setAudioPlayer({
      ...audioPlayer,
      isMuted: !audioPlayer.isMuted,
    })

    if (audioPlayer.isMuted) {
      const previousVolume = audioPlayer.volume

      setAudioPlayer({
        ...audioPlayer,
        keepVolume: previousVolume,
        volume: 0,
      })
    } else {
      const previousVolume = audioPlayer.keepVolume

      setAudioPlayer({
        ...audioPlayer,
        volume: previousVolume,
        keepVolume: 0,
      })
    }
  }

  return (
    <Flex align="center" content="end" className={styles.box}>
      <button type="button" onClick={toggleMutedVolumeHandler}>
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
