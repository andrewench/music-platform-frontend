import { ReactNode } from 'react'

import { TAppRoutes } from '@/components/global/router/router.types'

import { Home, Login } from '@/components/screens'

interface IAppRoutes {
  path: TAppRoutes
  element: ReactNode
}

export const screenRouteList: IAppRoutes[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'login',
    element: <Login />,
  },
]
