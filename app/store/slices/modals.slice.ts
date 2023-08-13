import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { TRootState } from '@/shared/types'

interface IInitialState {
  avatarUploader: {
    isOpen: boolean
  }
}

const initialState: IInitialState = {
  avatarUploader: {
    isOpen: false,
  },
}

const modalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    toggleAvatarUploader: state => {
      state.avatarUploader.isOpen = !state.avatarUploader.isOpen
    },
    closeModalWindow: (
      state,
      { payload: modalName }: PayloadAction<keyof IInitialState>
    ) => {
      return {
        ...state,
        [modalName]: {
          isOpen: false,
        },
      }
    },
  },
})

export const { reducer: modalsReducer, actions: modalsActions } = modalsSlice

export const modals = (state: TRootState) => state.modals
