import { TLoginQueries } from '../types'

export const AppConstant = {
  BASE_API_PREFIX: '/api',
  APP_NAME: 'Music Platform',
  FAKE_LOADER_DELAY: 1000,

  AUTH: {
    QUERY_PARAMS: {
      signIn: 'sign_in',
      signUp: 'sign_up',
      restore: 'restore',
    } as Record<string, TLoginQueries>,
  },

  TOAST: {
    LIFE_TIME: 5 * 1000,
  },

  TOKENS: {
    AT_LIFE_TIME: 10 * 1000,
  },

  COOKIE: {
    AT_PREFIX: 'accessToken',
  },
}
