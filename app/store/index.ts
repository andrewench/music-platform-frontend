import { atom, createStore } from 'jotai'
import { IUser } from '@/shared/types'

export const store = createStore()

export const userAtom = atom<{ profile: IUser }>({
  profile: {} as IUser,
})

interface IPreferences {
  sideBar: {
    open: boolean
  }
}

export const preferencesAtom = atom<IPreferences>({
  sideBar: {
    open: true,
  },
})

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

interface IModal {
  avatar: {
    open: boolean
  }
}

export const modalsAtom = atom<IModal>({
  avatar: {
    open: false,
  },
})
