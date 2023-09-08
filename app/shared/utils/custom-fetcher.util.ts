import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/dist/query'

import { TokenService } from '@/services'

import { AppConstant } from '@/shared/constants'

import { baseQuery } from '@/shared/utils'

import { TAuthSuccessResponse } from '@/shared/types'

export const customFetcher: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let response = await baseQuery(args, api, extraOptions)

  if (response.error && response.error.status === 401) {
    const { refreshToken } = TokenService.getTokens()

    const refreshResponse = await baseQuery(
      {
        url: '/auth/refresh',
        method: 'POST',
        body: {
          refreshToken,
        },
      },
      api,
      extraOptions
    )

    if (refreshResponse.data) {
      const { accessToken, refreshToken } =
        refreshResponse.data as TAuthSuccessResponse

      const { AT_LIFE_TIME, RT_LIFE_TIME } = AppConstant.TOKENS

      TokenService.setToken('accessToken', accessToken, {
        expires: new Date(new Date().getTime() + AT_LIFE_TIME),
      })

      TokenService.setToken('refreshToken', refreshToken, {
        expires: new Date(new Date().getTime() + RT_LIFE_TIME),
      })

      response = await baseQuery(args, api, extraOptions)
    }
  }

  return response
}
