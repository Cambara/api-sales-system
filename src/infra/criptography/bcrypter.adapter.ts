import * as bcrypt from 'bcrypt'
import { IEncrypter } from '../../data/protocols/encrypter'

export class BcrypterAdapter implements IEncrypter {
  private salt:number

  constructor () {
    this.salt = process.env.BCRYPTER_SALT ? parseInt(process.env.BCRYPTER_SALT) : 10
  }

  async encrypt (value: string): Promise<string> {
    const hash = await bcrypt.hash(value, this.salt)
    return hash
  }

  async isMatch (password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash)
  }
}
