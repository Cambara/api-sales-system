import { Body, Controller, Get, Inject, Post, UsePipes } from '@nestjs/common'
import { IGetUsersCase } from '../../../data/usecases/UserCase/protocol'
import { JoiValidationPipe } from '../../../infra/validation/joi/joi-validation.pipe'
import { CreateUserDto, UserJoiSchema } from './user.dto'

@Controller('users')
export class UserController {
  private readonly getUsersCase:IGetUsersCase

  constructor (@Inject('IGetUsersCase')getUsersCase:IGetUsersCase) {
    this.getUsersCase = getUsersCase
  }

  @Get()
  async list (): Promise<unknown> {
    const users = await this.getUsersCase.execute()
    return users
  }

  @Post()
  @UsePipes(new JoiValidationPipe(UserJoiSchema))
  async add (@Body() body:CreateUserDto): Promise<unknown> {
    return body
  }
}
