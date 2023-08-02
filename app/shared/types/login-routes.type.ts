type TLoginMainRoute = '/login'
type TLoginQuery = '?act='

export type TLoginQueries = 'sign_in' | 'sign_up' | 'restore'
export type TLoginRoutes = `${TLoginMainRoute}${TLoginQuery}${TLoginQueries}`
