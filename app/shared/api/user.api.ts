import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { AppConstant } from '@/shared/constants'

import { createRequestApi } from '@/shared/utils'

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: AppConstant.BASE_API_PREFIX,
  }),
  endpoints: ({ query }) => ({
    checkStatus: query(createRequestApi<{ message: string }>('/auth', 'POST')),
  }),
})

export const { useCheckStatusQuery } = userApi
