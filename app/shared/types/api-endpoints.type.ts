export type TApiMainEndpoint = '/api'

export type TApiEndpoints = '/user' | '/auth'

export type TApiRoutes = keyof Record<
  `${TApiMainEndpoint}${TApiEndpoints}`,
  never
>

export type TAuthRoutes =
  | '/auth/login'
  | '/auth/signup'
  | '/auth/restore'
  | '/user/me'
