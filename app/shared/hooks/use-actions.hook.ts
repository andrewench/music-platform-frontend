import { bindActionCreators } from '@reduxjs/toolkit'

import { allApiActions } from '@/shared/presets'

import { useAppDispatch } from '@/shared/hooks'

export const useActions = () => {
  const dispatch = useAppDispatch()

  return bindActionCreators(allApiActions, dispatch)
}
