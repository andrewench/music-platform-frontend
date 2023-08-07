import { FC, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import Cookies from 'js-cookie'

import { AppConstant } from '@/shared/constants'

export const AuthProvider: FC = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const accessToken = Cookies.get(AppConstant.COOKIE.AT_PREFIX)

    if (!accessToken) navigate('/login?act=sign_in')
  }, [navigate])

  return <Outlet />
}
