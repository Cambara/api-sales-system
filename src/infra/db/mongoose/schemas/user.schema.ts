import { Prop, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'
import { DefaultSchema } from '../decorators/default-schema.decorator'

@DefaultSchema()
export class User {
  @Prop()
  _id: string

  @Prop()
  invite_code: string

  @Prop()
  email: string

  @Prop()
  password: string

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
