import { HttpSuccessResponse } from '../protocols/http'

export const successResponse = <T>(body:T):HttpSuccessResponse<T> => ({
  message: 'Sucesso!',
  status: true,
  body
})
