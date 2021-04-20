import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { AuthModule } from './modules/auth.module'
import { GetUserModule } from './modules/get-user.module'

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/sales_system?maxIdleTimeMS=0'),
    AuthModule,
    GetUserModule
  ]
})
export class AppModule {}
