import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { FC, PropsWithChildren } from 'react'

const clientQuery = new QueryClient()

export const StoreProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <QueryClientProvider client={clientQuery}>{children}</QueryClientProvider>
  )
}
