import { Inject, Injectable } from '@nestjs/common'
import { IGetUsersCase, UserModel, IUserRepository } from './protocol'

@Injectable()
export class GetUsersCase implements IGetUsersCase {
  private readonly userRepository: IUserRepository

  constructor (@Inject('IUserRepository') userRepository: IUserRepository) {
    this.userRepository = userRepository
  }

  async execute (): Promise<UserModel[]> {
    return this.userRepository.find({}, { password: 0 })
  }
}
