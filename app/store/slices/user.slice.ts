import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { IUser } from '@/shared/types'

interface IInitialState {
  data: IUser
}

const initialState: IInitialState = {
  data: {} as IUser,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<IUser>) => {
      state.data = action.payload
    },
    clearUserData: state => {
      state.data = {} as IUser
    },
  },
})

export const { reducer: userReducer, actions: userActions } = userSlice
