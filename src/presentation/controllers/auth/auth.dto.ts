import { UserModel } from './auth.protocols'

export interface IAuthResponseDto {
  user: UserModel,
  token: string
}
