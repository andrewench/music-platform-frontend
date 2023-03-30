import { TApiEndpoints, TRestApiMethod } from '@/types'

export const createRequestApi = <TPayload, TEndpoint = TApiEndpoints>(
  url: TEndpoint,
  method: TRestApiMethod
) => {
  return (payload: TPayload) => ({
    url,
    headers: {
      'Content-Type': 'application/json',
    },
    method,
    body: payload,
  })
}
