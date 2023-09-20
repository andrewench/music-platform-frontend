import { createSlice } from '@reduxjs/toolkit'

interface IInitialState {
  sideBar: {
    isOpen: boolean
  }
}

const initialState: IInitialState = {
  sideBar: {
    isOpen: false,
  },
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleSideBar: state => {
      state.sideBar.isOpen = !state.sideBar.isOpen
    },
  },
})

export const { reducer: appReducer, actions: appActions } = appSlice
