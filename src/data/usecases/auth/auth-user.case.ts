import { Inject, Injectable } from '@nestjs/common'
import { IEncrypter } from '../../protocols/encrypter'
import { UserModel, IAuthUserCase, IAuthRepository, IAuthDTO } from './protocols'

@Injectable()
export class AuthUserCase implements IAuthUserCase {
  private readonly authRepository: IAuthRepository
  private readonly encrypterAdapter: IEncrypter

  constructor (@Inject('IAuthRepository') authRepository: IAuthRepository, @Inject('IEncrypter') encrypterAdapter:IEncrypter) {
    this.authRepository = authRepository
    this.encrypterAdapter = encrypterAdapter
  }

  async execute ({ email, authPassword }:IAuthDTO): Promise<UserModel | undefined> {
    const auth = await this.authRepository.findOne({ email, is_activated: true, is_blocked: false })

    if (!auth) return

    const isValid = await this.encrypterAdapter.isMatch(authPassword, auth.password)

    // if (!isValid) return

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { invite_code, password, ...user } = auth
    return user as UserModel
  }
}
