import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

import { AppConstant } from '@/shared/constants'

import { createRequestApi } from '@/shared/utils'

import { TAuthRoutes, TSignInFields, TSignUpFields } from '@/shared/types'

export const authApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: AppConstant.BASE_API_PREFIX,
  }),
  endpoints: ({ mutation }) => ({
    login: mutation<{ accessToken: string }, TSignInFields>(
      createRequestApi<TSignInFields, TAuthRoutes>('/auth/login', 'POST')
    ),
    signUp: mutation<{ accessToken: string }, TSignUpFields>(
      createRequestApi<TSignUpFields, TAuthRoutes>('/auth/signup', 'POST')
    ),
  }),
})

export const { useLoginMutation, useSignUpMutation } = authApi
