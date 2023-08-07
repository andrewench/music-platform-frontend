import { toast } from 'react-hot-toast'

import Cookies from 'js-cookie'
import { URLSearchParams } from 'url'

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

    if (!actQuery) {
      return {
        redirect: `/login?act=${AppConstant.AUTH.QUERY_PARAMS.signIn}`,
      }
    }

    switch (actQuery) {
      case AppConstant.AUTH.QUERY_PARAMS.signIn:
        setQuery(AppConstant.AUTH.QUERY_PARAMS.signIn)
        break

      case AppConstant.AUTH.QUERY_PARAMS.signUp:
        setQuery(AppConstant.AUTH.QUERY_PARAMS.signUp)
        break

      case AppConstant.AUTH.QUERY_PARAMS.restore:
        setQuery(AppConstant.AUTH.QUERY_PARAMS.restore)
        break
    }
  },

  authSuccess: (
    data: TAuthSuccessResponse | undefined,
    toastLabelKey: TToastLabelKeys,
    redirect: () => void
  ) => {
    if (!data) return

    const { accessToken } = data

    Cookies.set(AppConstant.COOKIE.AT_PREFIX, accessToken)

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
