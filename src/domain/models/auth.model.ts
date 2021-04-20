import { AddUserModel, UserModel } from './user.model'

export interface AddAuthModel extends AddUserModel{
  invite_code: string
  password: string
}

export interface AuthModel extends AddAuthModel, UserModel { }
