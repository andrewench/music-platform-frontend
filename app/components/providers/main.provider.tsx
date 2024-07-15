import { StrictMode } from 'react'
import { Provider } from 'react-redux'
import { Router } from './router-provider/router.provider'
import { StoreProvider } from './store.provider'
import { TranslateProvider } from './translate.provider'
import { store } from '@/store'

export const MainProvider = () => {
  return (
    <StrictMode>
      <StoreProvider>
        <Provider store={store}>
          <TranslateProvider>
            <Router />
          </TranslateProvider>
        </Provider>
      </StoreProvider>
    </StrictMode>
  )
}
