import { RouteObject, createBrowserRouter } from 'react-router-dom'

import { AuthProvider } from '../auth.provider'

import {
  Account,
  Artists,
  Chart,
  LikedSongs,
  Login,
  Messenger,
  Playlists,
  Podcasts,
  Settings,
  Subscriptions,
} from '@/components/screens'

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
        path: '/podcasts',
        element: <Podcasts />,
      },
      {
        path: '/playlists',
        element: <Playlists />,
      },
      {
        path: '/artists',
        element: <Artists />,
      },
      {
        path: '/chart',
        element: <Chart />,
      },
      {
        path: '/account',
        element: <Account />,
      },
      {
        path: '/messenger',
        element: <Messenger />,
      },
      {
        path: '/subscriptions',
        element: <Subscriptions />,
      },
      {
        path: '/liked',
        element: <LikedSongs />,
      },
      {
        path: '/settings',
        element: <Settings />,
      },
      {
        path: '/*',
        element: <Login />,
      },
    ],
  },
]

export const screenRouteList = createBrowserRouter(routes)
