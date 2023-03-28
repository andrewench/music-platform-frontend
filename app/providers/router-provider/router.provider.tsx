import { FC } from 'react'
import { RouterProvider } from 'react-router-dom'

import { screenRouteList } from '@/data'

export const Router: FC = () => <RouterProvider router={screenRouteList} />
