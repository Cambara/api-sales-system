import { AddDefaultModel, DefaultModel } from './default.model'

export interface AddUserModel extends AddDefaultModel{
  email: string
  name: string
  roles: string[]
  fk_corporation: string
  is_activated: boolean
  is_blocked: boolean
}

export interface UserModel extends AddUserModel, DefaultModel { }
