import { TLoginQueries } from '../types'

export const AppConstant = {
  APP_NAME: 'Music Platform',
  APP_VERSION: '0.2',

  BASE_API_PREFIX: '/api',
  FAKE_LOADER_DELAY: 1000,
  DEFAULT_AVATAR_PATH: '/images/default_avatar.png',

  AUTH: {
    QUERY_PARAMS: {
      signIn: 'sign_in',
      signUp: 'sign_up',
      restore: 'restore',
    } as Record<string, TLoginQueries>,
  },

  FILES: {
    IMAGE: {
      MAX_SIZE: 5242880,
    },
  },

  TOAST: {
    LIFE_TIME: 1000 * 5,
  },

  TOKENS: {
    AT_LIFE_TIME: 1000 * 60 * 15,
    RT_LIFE_TIME: 1000 * 60 * 60 * 24,
  },

  COOKIE: {
    AT_PREFIX: 'at',
    RT_PREFIX: 'rt',
  },
}
