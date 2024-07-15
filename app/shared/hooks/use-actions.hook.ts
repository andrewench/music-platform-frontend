import { bindActionCreators } from '@reduxjs/toolkit'
import { allApiActions } from '@/shared/presets'
import { useAppDispatch } from './use-redux.hook'

export const useActions = () => {
  const dispatch = useAppDispatch()

  return bindActionCreators(allApiActions, dispatch)
}
