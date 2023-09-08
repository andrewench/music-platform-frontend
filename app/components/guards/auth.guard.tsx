import { FC, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { FallbackGuard } from '@/components/guards'

import { TokenService } from '@/services'

import { useGetMeQuery } from '@/shared/api'

import { protectedRoutes, publicRoutes } from '@/shared/data'

import { useActions } from '@/shared/hooks'

export const AuthGuard: FC = () => {
  const [skip, setSkip] = useState<boolean>(true)

  const { setUserData } = useActions()

  const navigate = useNavigate()

  const { pathname } = useLocation()

  const { data } = useGetMeQuery(null, {
    skip,
  })

  useEffect(() => {
    if (!data) return

    const { refreshToken } = TokenService.getTokens()

    if (refreshToken) {
      setUserData(data)
    }
  }, [data, setUserData])

  useEffect(() => {
    const { refreshToken } = TokenService.getTokens()

    if (!refreshToken) {
      navigate('/login?act=sign_in')
    } else {
      if (skip) setSkip(false)

      if (
        publicRoutes.includes(pathname) ||
        !protectedRoutes.includes(pathname)
      ) {
        navigate('/playlists')
      }
    }
  }, [navigate, pathname, skip])

  return <FallbackGuard />
}
