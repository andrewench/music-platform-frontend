import { RouteObject, createBrowserRouter } from 'react-router-dom'

import { Home, Login } from '@/components/screens'

import { TAppRoutes } from './router.type'

type TRouter = RouteObject & {
  path: TAppRoutes
}

const routes: TRouter[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]

export const screenRouteList = createBrowserRouter(routes)
