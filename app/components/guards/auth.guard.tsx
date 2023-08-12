import { FC, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import Cookies from 'js-cookie'

import { FallbackGuard } from '@/components/guards'

import { protectedRoutes, publicRoutes } from '@/shared/data'

import { AppConstant } from '@/shared/constants'

export const AuthGuard: FC = () => {
  const navigate = useNavigate()

  const { pathname } = useLocation()

  useEffect(() => {
    const accessToken = Cookies.get(AppConstant.COOKIE.AT_PREFIX)

    if (!accessToken) navigate('/login?act=sign_in')

    if (
      publicRoutes.includes(pathname) ||
      !protectedRoutes.includes(pathname)
    ) {
      navigate('/playlists')
    }
  }, [navigate, pathname])

  return <FallbackGuard />
}
