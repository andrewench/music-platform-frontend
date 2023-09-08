import Cookies, { CookieAttributes } from 'js-cookie'

import { AppConstant } from '@/shared/constants'

type TokenType = 'accessToken' | 'refreshToken'

export class TokenService {
  protected static getPrefixKeyByType(type: TokenType) {
    return type === 'accessToken' ? 'AT_PREFIX' : 'RT_PREFIX'
  }

  public static getTokens() {
    const { AT_PREFIX, RT_PREFIX } = AppConstant.COOKIE

    const accessToken = Cookies.get(AT_PREFIX)
    const refreshToken = Cookies.get(RT_PREFIX)

    return {
      accessToken,
      refreshToken,
    }
  }

  public static setToken(
    type: TokenType,
    value: string,
    options?: CookieAttributes
  ) {
    const prefixKey = TokenService.getPrefixKeyByType(type)

    Cookies.set(AppConstant.COOKIE[prefixKey], value, options ?? {})
  }

  public static removeToken(type: TokenType) {
    const prefixKey = TokenService.getPrefixKeyByType(type)

    Cookies.remove(AppConstant.COOKIE[prefixKey])
  }
}
