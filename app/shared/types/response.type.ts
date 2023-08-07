export type TAuthSuccessResponse = Record<'accessToken', string>

export type TErrorResponse = {
  data: {
    error: string
    message: string
    statusCode: number
  }
  status: number
}
