import { FC, PropsWithChildren } from 'react'
import { Provider } from 'jotai'
import { DevTools } from 'jotai-devtools'
import { store } from '@/store'
import 'jotai-devtools/styles.css'

export const StoreProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Provider store={store}>
      {children}

      {import.meta.env.MODE === 'dev' && <DevTools />}
    </Provider>
  )
}
