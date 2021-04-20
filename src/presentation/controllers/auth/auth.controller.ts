import { Controller, Post, UseGuards, Request, Inject, Get } from '@nestjs/common'
import { JwtAuthGuard } from '../../../data/usecases/auth/jwt-auth.guard'
import { LocalAuthGuard } from '../../../data/usecases/auth/local-auth.guard'
import { UserModel } from '../../../domain/models/user.model'
import { successResponse } from '../../helpers/http.helper'
import { HttpSuccessResponse } from '../../protocols/http'
import { IAuthResponseDto } from './auth.dto'
import { IGenerateTokenCase } from './auth.protocols'

@Controller('auth')
export class AuthController {
  private readonly generateTokenCase:IGenerateTokenCase

  constructor (@Inject('IGenerateTokenCase')generateTokenCase:IGenerateTokenCase) {
    this.generateTokenCase = generateTokenCase
  }

  @UseGuards(LocalAuthGuard)
  @Post()
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async auth (@Request() req): Promise<HttpSuccessResponse<IAuthResponseDto>> {
    const token = await this.generateTokenCase.execute(req.user)
    return successResponse({
      user: req.user,
      token
    })
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async user (@Request() req):Promise<HttpSuccessResponse<UserModel>> {
    return successResponse(req.user)
  }
}
