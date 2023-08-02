export type TApiMainEndpoint = '/api'
export type TApiEndpoints = '/login' | '/join' | '/users' | '/auth'
export type TApiRoutes = keyof Record<
  `${TApiMainEndpoint}${TApiEndpoints}`,
  never
>
