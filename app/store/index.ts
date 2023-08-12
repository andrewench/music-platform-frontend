import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { userReducer } from '@/store/slices'

import { authApi, userApi } from '@/shared/api'

const combinedReducers = combineReducers({
  user: userReducer,
  [userApi.reducerPath]: userApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
})

export const store = configureStore({
  reducer: combinedReducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(userApi.middleware, authApi.middleware),
})
