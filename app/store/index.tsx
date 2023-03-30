import { FC, PropsWithChildren } from 'react'
import { Provider } from 'react-redux'

import { configureStore } from '@reduxjs/toolkit'

import { userReducer } from '@/slices'

import { userApi } from '@/api'

const store = configureStore({
  reducer: {
    user: userReducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(userApi.middleware),
})

export const StoreProvider: FC<Required<PropsWithChildren>> = ({
  children,
}) => {
  return <Provider store={store}>{children}</Provider>
}

export type TRootState = ReturnType<typeof store.getState>
export type TAppDispatch = typeof store.dispatch
