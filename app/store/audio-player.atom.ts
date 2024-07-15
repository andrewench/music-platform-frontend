import { atom } from 'jotai'

interface IAudioPlayer {
  volume: number
  keepVolume: number
  isMuted: boolean
}

export const audioPlayerAtom = atom<IAudioPlayer>({
  volume: 100,
  keepVolume: 0,
  isMuted: false,
})

audioPlayerAtom.debugLabel = 'audio-player-atom'
