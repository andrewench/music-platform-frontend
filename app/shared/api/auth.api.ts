import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

import { AppConstant } from '@/shared/constants'

import { createRequestApi } from '@/shared/utils'

import {
  TAuthRoutes,
  TAuthSuccessResponse,
  TSignInFields,
  TSignUpFields,
} from '@/shared/types'

export const authApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: AppConstant.BASE_API_PREFIX,
  }),
  endpoints: ({ mutation }) => ({
    login: mutation<TAuthSuccessResponse, TSignInFields>(
      createRequestApi<TSignInFields, TAuthRoutes>('/auth/login', 'POST')
    ),
    signUp: mutation<TAuthSuccessResponse, TSignUpFields>(
      createRequestApi<TSignUpFields, TAuthRoutes>('/auth/signup', 'POST')
    ),
  }),
})

export const { useLoginMutation, useSignUpMutation } = authApi
