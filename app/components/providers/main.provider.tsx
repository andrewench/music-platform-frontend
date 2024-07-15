import { StrictMode } from 'react'
import { QueryProvider } from './query.provider'
import { Router } from './router-provider/router.provider'
import { StoreProvider } from './store.provider'
import { TranslateProvider } from './translate.provider'

export const MainProvider = () => {
  return (
    <StrictMode>
      <QueryProvider>
        <StoreProvider>
          <TranslateProvider>
            <Router />
          </TranslateProvider>
        </StoreProvider>
      </QueryProvider>
    </StrictMode>
  )
}
