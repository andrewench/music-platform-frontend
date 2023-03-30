type TSignUpAllFields =
  | 'firstName'
  | 'lastName'
  | 'login'
  | 'email'
  | 'password'
  | 'confirm'

export type TSignInFields = Record<
  Extract<TSignUpAllFields, 'email' | 'password'>,
  string
>
export type TSignUpFields = Record<TSignUpAllFields, string>
export type TRestoreField = Record<Extract<TSignUpAllFields, 'email'>, string>
