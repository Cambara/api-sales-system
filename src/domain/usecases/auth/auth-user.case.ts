import { UserModel } from '../../models/user.model'

export interface IAuthDTO {
  email: string
  authPassword: string
}

export interface IAuthUserCase {
  execute(dto:IAuthDTO):Promise<UserModel | undefined>
}
