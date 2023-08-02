import { FC, StrictMode } from 'react'

import {
  Router,
  StoreProvider,
  TranslateProvider,
} from '@/components/providers'

export const MainProvider: FC = () => {
  return (
    <StrictMode>
      <StoreProvider>
        <TranslateProvider>
          <Router />
        </TranslateProvider>
      </StoreProvider>
    </StrictMode>
  )
}
