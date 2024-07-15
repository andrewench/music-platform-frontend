import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query'
import { TokenService } from '@/services'
import { Constants } from '@/shared/constants'

export const baseQuery = fetchBaseQuery({
  baseUrl: Constants.BASE_API_PREFIX,
  prepareHeaders: headers => {
    const { accessToken } = TokenService.getTokens()

    if (accessToken) headers.set('Authorization', `Bearer ${accessToken}`)

    return headers
  },
})
