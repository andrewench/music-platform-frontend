import { StrictMode } from 'react'
import { Provider as StoreProvider } from 'jotai'
import { store } from '@/store'
import { QueryProvider } from './query.provider'
import { Router } from './router-provider/router.provider'
import { TranslateProvider } from './translate.provider'

export const MainProvider = () => {
  return (
    <StrictMode>
      <QueryProvider>
        <StoreProvider store={store}>
          <TranslateProvider>
            <Router />
          </TranslateProvider>
        </StoreProvider>
      </QueryProvider>
    </StrictMode>
  )
}
