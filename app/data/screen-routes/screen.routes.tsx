import { RouteObject, createBrowserRouter } from 'react-router-dom'

import { Home, Login } from '@/components/screens'

import { TAppRoutes } from '@/providers/router-provider/router.type'

type IRouter = RouteObject & {
  path: TAppRoutes
}

const routes: IRouter[] = [
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
