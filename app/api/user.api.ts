import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { TApiMainEndpoint } from '@/types'

import { createRequestApi } from '@/utils'

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
