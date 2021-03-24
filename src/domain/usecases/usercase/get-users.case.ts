import { UserModel } from '../../models/user.model'

export interface IGetUsersCase {
  execute():Promise<UserModel[]>
}
