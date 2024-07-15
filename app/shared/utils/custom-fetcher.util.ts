import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/dist/query'
import { Mutex } from 'async-mutex'
import { TokenService } from '@/services'
import { Constants } from '@/shared/constants'
import { baseQuery } from '@/shared/utils'
import { TAuthSuccessResponse } from '@/shared/types'

const mutex = new Mutex()

export const customFetcher: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  await mutex.waitForUnlock()

  let response = await baseQuery(args, api, extraOptions)

  if (response.error && response.error.status === 401) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire()

      try {
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

          const { AT_LIFE_TIME, RT_LIFE_TIME } = Constants.TOKENS

          TokenService.setToken('accessToken', accessToken, {
            expires: new Date(new Date().getTime() + AT_LIFE_TIME),
          })

          TokenService.setToken('refreshToken', refreshToken, {
            expires: new Date(new Date().getTime() + RT_LIFE_TIME),
          })

          response = await baseQuery(args, api, extraOptions)
        }
      } finally {
        release()
      }
    } else {
      await mutex.waitForUnlock()

      response = await baseQuery(args, api, extraOptions)
    }
  }

  return response
}
