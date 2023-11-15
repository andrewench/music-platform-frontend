import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

import { TokenService } from '@/services'

import { Constants } from '@/shared/constants'

import { createRequestApi } from '@/shared/utils'

import {
  TAuthRoutes,
  TAuthSuccessResponse,
  TSignInFields,
  TSignUpFields,
} from '@/shared/types'

export const authApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: Constants.BASE_API_PREFIX,
  }),
  endpoints: ({ mutation }) => ({
    login: mutation<TAuthSuccessResponse, TSignInFields>(
      createRequestApi<TSignInFields, TAuthRoutes>('/auth/login', 'POST')
    ),
    signUp: mutation<TAuthSuccessResponse, TSignUpFields>(
      createRequestApi<TSignUpFields, TAuthRoutes>('/auth/signup', 'POST')
    ),

    logout: mutation<{ status: string }, null>({
      query: () => ({
        url: '/auth/logout',
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${String(
            TokenService.getTokens().accessToken
          )}`,
        },
      }),
    }),
  }),
})

export const { useLoginMutation, useSignUpMutation, useLogoutMutation } =
  authApi
