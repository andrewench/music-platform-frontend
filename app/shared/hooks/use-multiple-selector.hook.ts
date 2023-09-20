import { selectedStore } from '@/store'

import { useAppSelector } from '@/shared/hooks'

export const useMultipleSelector = () => {
  const state = useAppSelector(selectedStore)

  return state
}
