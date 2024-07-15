import { FC } from 'react'
import { RouterProvider } from 'react-router-dom'
import { screenRouteList } from './router.data'

export const Router: FC = () => {
  return <RouterProvider router={screenRouteList} />
}
