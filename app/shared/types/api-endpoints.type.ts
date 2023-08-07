export type TApiMainEndpoint = '/api'

export type TApiEndpoints = '/users' | '/auth'

export type TApiRoutes = keyof Record<
  `${TApiMainEndpoint}${TApiEndpoints}`,
  never
>

export type TAuthRoutes = '/auth/login' | '/auth/signup' | '/auth/restore'
