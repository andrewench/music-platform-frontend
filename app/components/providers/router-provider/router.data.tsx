import { RouteObject, createBrowserRouter } from 'react-router-dom'

import { AuthProvider } from '../auth.provider'

import { Login, Recent } from '@/components/screens'

import { TAppRoutes } from './router.type'

type TRouter = RouteObject & {
  path: TAppRoutes
}

const routes: TRouter[] = [
  {
    path: '/',
    element: <AuthProvider />,
    children: [
      {
        path: '/',
        element: <Login />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/recent',
        element: <Recent />,
      },
    ],
  },
]

export const screenRouteList = createBrowserRouter(routes)
