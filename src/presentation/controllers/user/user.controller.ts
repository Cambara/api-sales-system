import { Controller, Get, Inject } from '@nestjs/common'
import { IGetUsersCase } from '../../../data/usecases/UserCase/protocol'

@Controller('users')
export class UserController {
  private readonly getUsersCase:IGetUsersCase

  constructor (@Inject('IGetUsersCase')getUsersCase:IGetUsersCase) {
    this.getUsersCase = getUsersCase
  }

  @Get()
  async handle (): Promise<unknown> {
    const users = await this.getUsersCase.execute()
    return users
  }
}
