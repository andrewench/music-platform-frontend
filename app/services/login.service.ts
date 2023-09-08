import { toast } from 'react-hot-toast'

import { URLSearchParams } from 'url'

import { TokenService } from '@/services'

import { AppConstant } from '@/shared/constants'

import {
  StateAction,
  TAuthSuccessResponse,
  TLoginQueries,
} from '@/shared/types'

type TToastLabelKeys = Record<'logged' | 'redirect' | 'unknown', string>

export const LoginService = {
  setRenderedFormStep: (
    query: URLSearchParams,
    setQuery: StateAction<TLoginQueries>
  ) => {
    const actQuery = query.get('act') as TLoginQueries

    const { signIn, signUp, restore } = AppConstant.AUTH.QUERY_PARAMS

    if (!actQuery) {
      return {
        redirect: `/login?act=${signIn}`,
      }
    }

    switch (actQuery) {
      case signIn:
        setQuery(signIn)
        break

      case signUp:
        setQuery(signUp)
        break

      case restore:
        setQuery(restore)
        break
    }
  },

  authSuccess: (
    data: TAuthSuccessResponse | undefined,
    toastLabelKey: TToastLabelKeys,
    redirect: () => void
  ) => {
    if (!data) return

    const { accessToken, refreshToken } = data

    const { AT_LIFE_TIME, RT_LIFE_TIME } = AppConstant.TOKENS

    TokenService.setToken('accessToken', accessToken, {
      expires: new Date(new Date().getTime() + AT_LIFE_TIME),
    })

    TokenService.setToken('refreshToken', refreshToken, {
      expires: new Date(new Date().getTime() + RT_LIFE_TIME),
    })

    toast.success(toastLabelKey.logged)

    const promise = new Promise<void>(resolve => {
      setTimeout(() => {
        resolve()
      }, 3 * 1000)
    })

    toast.promise(promise, {
      loading: toastLabelKey.redirect,
      success: () => {
        redirect()

        return toastLabelKey.redirect
      },
      error: () => toastLabelKey.unknown,
    })
  },
}
