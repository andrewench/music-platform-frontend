import { ObjectSchema, object, string } from 'yup'
import { ICreatePlaylistFields } from '@/shared/types'

export const CreatePlaylistSchema: ObjectSchema<ICreatePlaylistFields> =
  object().shape({
    name: string().required('common.required'),
    description: string().required('common.required'),
    genre: string().required('common.required'),
  })
