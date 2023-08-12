import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query'
import Cookies from 'js-cookie'

import { AppConstant } from '@/shared/constants'

export const customFetcher = fetchBaseQuery({
  baseUrl: AppConstant.BASE_API_PREFIX,
  prepareHeaders: headers => {
    const accessToken = Cookies.get(AppConstant.COOKIE.AT_PREFIX)

    if (accessToken) headers.set('Authorization', `Bearer ${accessToken}`)

    return headers
  },
})
