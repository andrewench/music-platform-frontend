export type TRoles = 'user'

export interface IUser {
  id: number
  firstName: string
  lastName: string
  login: string
  nickname: string | null
  email: string
  role: TRoles
  avatar: string | null
  createdAt: string
  updatedAt: string[]
}
