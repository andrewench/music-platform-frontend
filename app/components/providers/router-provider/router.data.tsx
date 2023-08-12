import { Suspense } from 'react'
import { lazily } from 'react-lazily'
import { RouteObject, createBrowserRouter } from 'react-router-dom'

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
        element: <Login />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/podcasts',
        element: (
          <Suspense>
            <Podcasts />
          </Suspense>
        ),
      },
      {
        path: '/playlists',
        element: (
          <Suspense>
            <Playlists />
          </Suspense>
        ),
      },
      {
        path: '/artists',
        element: (
          <Suspense>
            <Artists />
          </Suspense>
        ),
      },
      {
        path: '/chart',
        element: (
          <Suspense>
            <Chart />
          </Suspense>
        ),
      },
      {
        path: '/account',
        element: (
          <Suspense>
            <Account />
          </Suspense>
        ),
      },
      {
        path: '/messenger',
        element: (
          <Suspense>
            <Messenger />
          </Suspense>
        ),
      },
      {
        path: '/subscriptions',
        element: (
          <Suspense>
            <Subscriptions />
          </Suspense>
        ),
      },
      {
        path: '/liked',
        element: (
          <Suspense>
            <LikedSongs />
          </Suspense>
        ),
      },
      {
        path: '/settings',
        element: (
          <Suspense>
            <Settings />
          </Suspense>
        ),
      },
      {
        path: '/*',
        element: (
          <Suspense>
            <AuthGuard />
          </Suspense>
        ),
      },
    ],
  },
]

export const screenRouteList = createBrowserRouter(routes)
