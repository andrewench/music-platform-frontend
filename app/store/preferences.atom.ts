import { atom } from 'jotai'

interface IPreferences {
  sideBar: {
    open: boolean
  }
}

export const preferencesAtom = atom<IPreferences>({
  sideBar: {
    open: true,
  },
})

preferencesAtom.debugLabel = 'preferences-atom'
