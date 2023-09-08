import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query'

import { TokenService } from '@/services'

import { AppConstant } from '@/shared/constants'

export const baseQuery = fetchBaseQuery({
  baseUrl: AppConstant.BASE_API_PREFIX,
  prepareHeaders: headers => {
    const { accessToken } = TokenService.getTokens()

    if (accessToken) headers.set('Authorization', `Bearer ${accessToken}`)

    return headers
  },
})
