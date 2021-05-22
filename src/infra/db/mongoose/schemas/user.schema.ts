import { Prop, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'
import { DefaultSchema } from '../decorators/default-schema.decorator'
import { BaseSchema } from './base.schema'

@DefaultSchema()
export class User extends BaseSchema {
  @Prop()
  email: string

  @Prop()
  name: string

  @Prop([String])
  roles: string

  @Prop()
  fk_corporation: string

  @Prop()
  is_activated: boolean

  @Prop()
  is_blocked: boolean
}

export type UserDocument = User & Document

export const UserSchema = SchemaFactory.createForClass(User)
