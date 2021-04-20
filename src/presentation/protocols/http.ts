
export interface HttpSuccessResponse<T> {
  status: true
  body: T
  message: string
}
