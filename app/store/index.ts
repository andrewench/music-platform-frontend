import { createStore } from 'jotai'

export const store = createStore()

export { audioPlayerAtom } from './audio-player.atom'
export { preferencesAtom } from './preferences.atom'
export { userAtom } from './user.atom'
export { modalsAtom } from './modals.atom'
