import { TLoginQueries } from '../types'

export const Constants = {
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

  PATTERNS: {
    FIRST_NAME: /\b[^0-9^\s]{2,24}\b/,
    LAST_NAME: /\b[^0-9^\s]{2,30}\b/,
    LOGIN: /[\w\\_?\d*]+/,
    EMAIL: /^([a-zA-Z0-9_\-\\.]+)@([a-zA-Z0-9_\-\\.]+)\.([a-zA-Z]{2,5})$/,
    PASSWORD:
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,32}$/,
  },
}
