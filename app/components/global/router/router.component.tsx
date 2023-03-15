import { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { screenRouteList } from '@/data'

export const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {screenRouteList.map(({ path, element }, idx) => (
          <Route path={path} element={element} key={idx} />
        ))}
      </Routes>
    </BrowserRouter>
  )
}
