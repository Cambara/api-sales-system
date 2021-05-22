import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { IGenerateTokenCase } from '../../../domain/usecases/auth/generate-token.case'
import { UserModel } from '../UserCase/protocol'

@Injectable()
export class GenerateTokenCase implements IGenerateTokenCase {
  private readonly jwtService: JwtService

  constructor (jwtService: JwtService) {
    this.jwtService = jwtService
  }

  async execute (user: UserModel): Promise<string> {
    const token = await this.jwtService.signAsync(user)
    return token
  }
}
