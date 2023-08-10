import { FC, useEffect, useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

import Cookies from 'js-cookie'

import { Fallback } from '@/components/layout'

import { publicRoutes } from '@/shared/data'

import { AppConstant } from '@/shared/constants'

export const AuthProvider: FC = () => {
  const [isMounted, setMounted] = useState<boolean>(false)

  const navigate = useNavigate()

  const { pathname } = useLocation()

  useEffect(() => {
    if (!isMounted) setMounted(true)

    const accessToken = Cookies.get(AppConstant.COOKIE.AT_PREFIX)

    if (!accessToken) {
      navigate('/login?act=sign_in')
    } else if (publicRoutes.includes(pathname)) {
      navigate('/playlists')
    }
  }, [navigate, isMounted, pathname])

  return isMounted ? <Outlet /> : <Fallback />
}
