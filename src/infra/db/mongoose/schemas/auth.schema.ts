import { Prop, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'
import { DefaultSchema } from '../decorators/default-schema.decorator'
import { User } from './user.schema'

@DefaultSchema('users')
export class Auth extends User {
  @Prop()
  invite_code: string

  @Prop()
  password: string
}

export type AuthDocument = Auth & Document

export const AuthSchema = SchemaFactory.createForClass(Auth)
