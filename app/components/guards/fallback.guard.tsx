import { FC, useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'

import { Fallback } from '@/components/layout'

import { AppConstant } from '@/shared/constants'

import { useDebounce } from '@/shared/hooks'

export const FallbackGuard: FC = () => {
  const [isComponentMounted, setComponentMounted] = useState<boolean>(false)

  const mountDebounce = () => {
    setComponentMounted(true)
  }

  const showDebounceFallback = useDebounce(
    mountDebounce,
    AppConstant.FAKE_LOADER_DELAY
  )

  useEffect(() => {
    if (!isComponentMounted) showDebounceFallback()
  }, [isComponentMounted, showDebounceFallback])

  return isComponentMounted ? <Outlet /> : <Fallback type="screen" />
}
