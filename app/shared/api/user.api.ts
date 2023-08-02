import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { createRequestApi } from '@/shared/utils'

import { TApiMainEndpoint } from '@/shared/types'

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api' as TApiMainEndpoint,
  }),
  endpoints: ({ query }) => ({
    checkStatus: query({
      query: createRequestApi<{ message: string }>('/auth', 'POST'),
    }),
  }),
})

export const { useCheckStatusQuery } = userApi
