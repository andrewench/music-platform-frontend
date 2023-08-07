import { FC } from 'react'
import { RouterProvider } from 'react-router-dom'

import { screenRouteList } from './router.data'

import { Fallback } from '@/components/layout'

export const Router: FC = () => (
  <RouterProvider fallbackElement={<Fallback />} router={screenRouteList} />
)
