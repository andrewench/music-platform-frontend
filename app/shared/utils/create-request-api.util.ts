import { TApiEndpoints, TRestApiMethod } from '@/shared/types'

export const createRequestApi = <
  TPayload = Record<string, unknown>,
  TEndpoint = TApiEndpoints
>(
  url: TEndpoint,
  method: TRestApiMethod
) => {
  return {
    query: (payload: TPayload) => ({
      url,
      headers: {
        'Content-Type': 'application/json',
      },
      method,
      body: payload,
    }),
  }
}
