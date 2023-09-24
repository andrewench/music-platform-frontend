import { lazily } from 'react-lazily'
import { RouteObject, createBrowserRouter } from 'react-router-dom'

import { LazyComponent } from '@/components/layout'

import { AuthGuard } from '@/components/guards'

import { TAppRoutes } from './router.type'

const {
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
} = lazily(() => import('@/components/screens'))

type TRouter = RouteObject & {
  path: TAppRoutes
}

const routes: TRouter[] = [
  {
    path: '/',
    element: <AuthGuard />,
    children: [
      {
        path: '/',
        element: <LazyComponent render={<Login />} />,
      },
      {
        path: '/login',
        element: <LazyComponent render={<Login />} />,
      },
      {
        path: '/podcasts',
        element: <LazyComponent render={<Podcasts />} />,
      },
      {
        path: '/playlists',
        element: <LazyComponent render={<Playlists />} />,
      },
      {
        path: '/artists',
        element: <LazyComponent render={<Artists />} />,
      },
      {
        path: '/chart',
        element: <LazyComponent render={<Chart />} />,
      },
      {
        path: '/account',
        element: <LazyComponent render={<Account />} />,
      },
      {
        path: '/messenger',
        element: <LazyComponent render={<Messenger />} />,
      },
      {
        path: '/subscriptions',
        element: <LazyComponent render={<Subscriptions />} />,
      },
      {
        path: '/liked',
        element: <LazyComponent render={<LikedSongs />} />,
      },
      {
        path: '/settings',
        element: <LazyComponent render={<Settings />} />,
      },
    ],
  },
]

export const screenRouteList = createBrowserRouter(routes)

export const publicRoutes = ['/login']

export const protectedRoutes = [
  '/podcasts',
  '/playlists',
  '/artists',
  '/chart',
  '/account',
  '/messenger',
  '/subscriptions',
  '/liked',
  '/settings',
]
