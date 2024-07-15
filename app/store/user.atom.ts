import { atom } from 'jotai'
import { IUser } from '@/shared/types'

export const userAtom = atom<{ profile: IUser }>({
  profile: {} as IUser,
})

userAtom.debugLabel = 'user-atom'
