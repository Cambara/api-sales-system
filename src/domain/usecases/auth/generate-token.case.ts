import { UserModel } from '../../models/user.model'

export interface IGenerateTokenCase {
  execute(user:UserModel):Promise<string>
}
