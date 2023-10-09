import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { TRootState } from '@/shared/types'

interface IInitialState {
  sideBar: {
    isOpen: boolean
  }
  audioPlayer: {
    volume: number
    keepVolume: number
    isMuted: boolean
  }
}

const initialState: IInitialState = {
  sideBar: {
    isOpen: false,
  },
  audioPlayer: {
    keepVolume: 0,
    volume: 100,
    isMuted: false,
  },
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleSideBar: state => {
      state.sideBar.isOpen = !state.sideBar.isOpen
    },

    setVolume: (state, action: PayloadAction<number>) => {
      state.audioPlayer.volume = action.payload
    },
    toggleMutedVolume: state => {
      state.audioPlayer.isMuted = !state.audioPlayer.isMuted

      if (state.audioPlayer.isMuted) {
        state.audioPlayer.keepVolume = state.audioPlayer.volume

        state.audioPlayer.volume = 0
      } else {
        state.audioPlayer.volume = state.audioPlayer.keepVolume

        state.audioPlayer.keepVolume = 0
      }
    },
  },
})

export const { reducer: appReducer, actions: appActions } = appSlice

export const app = (state: TRootState) => state.app
