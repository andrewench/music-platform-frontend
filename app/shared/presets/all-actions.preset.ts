import { modalsActions, userActions } from '@/store/slices'

export const allApiActions = {
  ...userActions,
  ...modalsActions,
}
