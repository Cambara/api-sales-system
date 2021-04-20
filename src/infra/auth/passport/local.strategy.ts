import { Inject, Injectable, UnauthorizedException } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { Strategy } from 'passport-local'
import { UserModel, IAuthUserCase } from './protocols'

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  private authUserCase:IAuthUserCase

  constructor (@Inject('IAuthUserCase') authUserCase:IAuthUserCase) {
    super({
      usernameField: 'email',
      passwordField: 'password'
    })
    this.authUserCase = authUserCase
  }

  async validate (email: string, password:string): Promise<UserModel> {
    const user = await this.authUserCase.execute({
      email,
      authPassword: password
    })

    if (!user) {
      throw new UnauthorizedException()
    }
    return user
  }
}
