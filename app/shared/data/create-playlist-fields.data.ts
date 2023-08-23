import { ICreatePlaylistFields } from '@/shared/types'

interface ICreatePlaylistFieldsList {
  labelKey: string
  type: string
  fieldState: keyof ICreatePlaylistFields
}

export const CreatePlaylistFieldsList: ICreatePlaylistFieldsList[] = [
  {
    labelKey: 'sections.playlist.create.name',
    type: 'text',
    fieldState: 'name',
  },
  {
    labelKey: 'sections.playlist.create.description',
    type: 'text',
    fieldState: 'description',
  },
  {
    labelKey: 'sections.playlist.create.genre',
    type: 'text',
    fieldState: 'genre',
  },
]
