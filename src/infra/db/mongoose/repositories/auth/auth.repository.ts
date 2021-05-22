import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { IAuthRepository, AuthModel, AddAuthModel } from './protocol'
import { AbstractRepository } from '../abstract/abstract.repository'
import { Auth, AuthDocument } from '../../schemas/auth.schema'

@Injectable()
export class AuthRepository extends AbstractRepository<AuthDocument, AuthModel, AddAuthModel> implements IAuthRepository {
  constructor (@InjectModel(Auth.name) userModel:Model<AuthDocument>) {
    super(userModel)
  }
}
