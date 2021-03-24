import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { User, UserSchema } from '../../infra/db/mongoose/schemas/user.schema'
import { GetUsersCase } from '../../data/usecases/UserCase/get-users-case'
import { UserRepository } from '../../infra/db/mongoose/repositories/user/user.repository'
import { UserController } from '../../presentation/controllers/user/user.controller'

const userRepository = { provide: 'IUserRepository', useClass: UserRepository }
const getUsersCase = { provide: 'IGetUsersCase', useClass: GetUsersCase }

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])
  ],
  providers: [userRepository, getUsersCase],
  controllers: [UserController]
})
export class GetUserModule { }
