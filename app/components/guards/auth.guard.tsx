import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import {
  protectedRoutes,
  publicRoutes,
} from '@/components/providers/router-provider/router.data'

import { FallbackGuard } from '@/components/guards'

import { axiosInstance } from '@/config/axios.instance'

export const AuthGuard = () => {
  const navigate = useNavigate()

  const { pathname } = useLocation()

  const whoAmIQuery = useQuery({
    queryKey: ['whoami'],
    queryFn: async () => (await axiosInstance.get('/user/me')).data,
    refetchOnWindowFocus: false,
    enabled: protectedRoutes.includes(pathname),
  })

  useEffect(() => {
    if (!whoAmIQuery.data) return

    if (
      publicRoutes.includes(pathname) ||
      !protectedRoutes.includes(pathname)
    ) {
      navigate('/playlists')
    }
  }, [navigate, pathname, whoAmIQuery.data])

  return <FallbackGuard />
}
