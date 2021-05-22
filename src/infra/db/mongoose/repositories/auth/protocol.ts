import { AddAuthModel, AuthModel } from '../../../../../domain/models/auth.model'
import { IAbstractRepository } from '../abstract/abstract.protocol'
import { AuthDocument } from '../../schemas/auth.schema'
export * from '../../../../../domain/models/auth.model'

export type IAuthRepository = IAbstractRepository<AuthDocument, AuthModel, AddAuthModel>
