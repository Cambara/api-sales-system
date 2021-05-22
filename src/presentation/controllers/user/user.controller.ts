import { Body, Controller, Get, Inject, Post, UseGuards, UsePipes } from '@nestjs/common'
import { Roles } from '../../../data/decorators/roles.decorator'
import { JwtAuthGuard } from '../../../data/usecases/auth/jwt-auth.guard'
import { RolesGuard } from '../../../data/usecases/auth/roles.guard'
import { IGetUsersCase } from '../../../data/usecases/UserCase/protocol'
import { Role } from '../../../domain/models/role.model'
import { JoiValidationPipe } from '../../../infra/validation/joi/joi-validation.pipe'
import { CreateUserDto, UserJoiSchema } from './user.dto'

@Controller('users')
@UseGuards(JwtAuthGuard, RolesGuard)
export class UserController {
  private readonly getUsersCase:IGetUsersCase

  constructor (@Inject('IGetUsersCase')getUsersCase:IGetUsersCase) {
    this.getUsersCase = getUsersCase
  }

  @Roles(Role.USER_MANAGER)
  @Get()
  async list (): Promise<unknown> {
    const users = await this.getUsersCase.execute()
    return users
  }

  @Roles(Role.USER_MANAGER)
  @Post()
  @UsePipes(new JoiValidationPipe(UserJoiSchema))
  async add (@Body() body:CreateUserDto): Promise<unknown> {
    return body
  }
}
