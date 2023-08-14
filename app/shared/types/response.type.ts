export type TAuthSuccessResponse = Record<
  'accessToken' | 'refreshToken',
  string
>

export type TErrorResponse = {
  data: {
    error: string
    message: string
    statusCode: number
  }
  status: number
}
