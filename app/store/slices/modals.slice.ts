import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface IInitialState {
  avatarUploader: {
    isOpen: boolean
  }
  languageSelector: {
    isOpen: boolean
  }
}

const initialState: IInitialState = {
  avatarUploader: {
    isOpen: false,
  },
  languageSelector: {
    isOpen: false,
  },
}

const modalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    toggleModal: (
      state,
      action: PayloadAction<{
        name: keyof IInitialState
        value: boolean
        mode?: 'toggle'
      }>
    ) => {
      const { name, value, mode } = action.payload

      if (mode === 'toggle') {
        state[name].isOpen = !state[name].isOpen
      } else {
        state[name].isOpen = value
      }
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
