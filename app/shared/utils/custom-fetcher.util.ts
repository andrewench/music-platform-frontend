import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/dist/query'
import Cookies from 'js-cookie'

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
    const refreshToken = Cookies.get(AppConstant.COOKIE.RT_PREFIX)

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

      Cookies.set(AppConstant.COOKIE.AT_PREFIX, accessToken, {
        expires: new Date(
          new Date().getTime() + AppConstant.TOKENS.AT_LIFE_TIME
        ),
      })

      Cookies.set(AppConstant.COOKIE.RT_PREFIX, refreshToken, {
        expires: new Date(
          new Date().getTime() + AppConstant.TOKENS.RT_LIFE_TIME
        ),
      })

      response = await baseQuery(args, api, extraOptions)
    }
  }

  return response
}
