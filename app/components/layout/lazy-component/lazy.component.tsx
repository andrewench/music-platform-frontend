import { FC, ReactNode, Suspense } from 'react'

export const LazyComponent: FC<{ render: ReactNode }> = ({ render }) => {
  return <Suspense>{render}</Suspense>
}
