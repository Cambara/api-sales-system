import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { IUserRepository, UserModel } from './protocol'
import { AbstractRepository } from '../abstract/abstract.repository'
import { User, UserDocument } from '../../schemas/user.schema'

@Injectable()
export class UserRepository extends AbstractRepository<UserDocument, UserModel> implements IUserRepository {
  constructor (@InjectModel(User.name) userModel:Model<UserDocument>) {
    super(userModel)
  }
}
