import { atom } from 'jotai'

interface IModal {
  avatar: {
    open: boolean
  }
}

export const modalsAtom = atom<IModal>({
  avatar: {
    open: false,
  },
})

modalsAtom.debugLabel = 'modals-atom'
