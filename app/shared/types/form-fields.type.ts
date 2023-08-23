type TSignUpAllFields =
  | 'firstName'
  | 'lastName'
  | 'login'
  | 'email'
  | 'password'
  | 'confirm'

export type TSignUpFormFields = Record<TSignUpAllFields, string>
export type TSignInFields = Record<
  Extract<TSignUpAllFields, 'login' | 'password'>,
  string
>
export type TSignUpFields = Record<Exclude<TSignUpAllFields, 'confirm'>, string>
export type TRestoreField = Record<Extract<TSignUpAllFields, 'email'>, string>

export interface ICreatePlaylistFields {
  name: string
  description: string
  genre: string
}
