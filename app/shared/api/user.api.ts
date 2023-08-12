import { createApi } from '@reduxjs/toolkit/query/react'

import { customFetcher } from '@/shared/utils'

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: customFetcher,
  endpoints: ({ query }) => ({
    getMe: query({
      query: () => ({
        url: '/user/me',
        method: 'GET',
      }),
    }),
  }),
})

export const { useGetMeQuery } = userApi
