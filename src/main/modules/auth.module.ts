import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { MongooseModule } from '@nestjs/mongoose'
import { AuthUserCase } from '../../data/usecases/auth/auth-user.case'
import { GenerateTokenCase } from '../../data/usecases/auth/generate-token.case'
import { JwtStrategy } from '../../infra/auth/passport/jwt.strategy'
import { LocalStrategy } from '../../infra/auth/passport/local.strategy'
import { BcrypterAdapter } from '../../infra/criptography/bcrypter.adapter'
import { AuthRepository } from '../../infra/db/mongoose/repositories/auth/auth.repository'
import { Auth, AuthSchema } from '../../infra/db/mongoose/schemas/auth.schema'
import { AuthController } from '../../presentation/controllers/auth/auth.controller'

const authRepository = { provide: 'IAuthRepository', useClass: AuthRepository }
const encrypterAdapter = { provide: 'IEncrypter', useClass: BcrypterAdapter }
const authUserCase = { provide: 'IAuthUserCase', useClass: AuthUserCase }
const generateTokenCase = { provide: 'IGenerateTokenCase', useClass: GenerateTokenCase }

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Auth.name, schema: AuthSchema }]),
    JwtModule.register({
      secret: 'test',
      signOptions: { expiresIn: '1d' }
    })
  ],
  providers: [authRepository, encrypterAdapter, authUserCase, generateTokenCase, LocalStrategy, JwtStrategy],
  controllers: [AuthController]
})
export class AuthModule { }
