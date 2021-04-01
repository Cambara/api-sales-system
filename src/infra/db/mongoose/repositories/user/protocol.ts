import { AddUserModel, UserModel } from '../../../../../domain/models/user.model'
import { IAbstractRepository } from '../abstract/abstract.protocol'
import { UserDocument } from '../../schemas/user.schema'
export * from '../../../../../domain/models/user.model'

export type IUserRepository = IAbstractRepository<UserDocument, UserModel, AddUserModel>
