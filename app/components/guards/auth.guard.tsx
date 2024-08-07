import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { AxiosResponse } from 'axios'
import { useAtom } from 'jotai'
import {
  protectedRoutes,
  publicRoutes,
} from '@/components/providers/router-provider/router.data'
import { FallbackGuard } from '@/components/guards'
import { userAtom } from '@/store'
import { IUser } from '@/shared/types'
import { axiosInstance } from '@/config/axios.instance'

export const AuthGuard = () => {
  const [_, setUserData] = useAtom(userAtom)

  const navigate = useNavigate()

  const { pathname } = useLocation()

  const whoAmIQuery = useQuery({
    queryKey: ['whoami'],
    queryFn: async () => {
      const response = await axiosInstance.get<unknown, AxiosResponse<IUser>>(
        '/user/me'
      )

      if (response.status === 200 && response.data) {
        setUserData({
          profile: response.data,
        })
      }

      return response.data
    },
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
