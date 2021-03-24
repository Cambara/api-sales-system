import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

@Schema({ _id: false, timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })
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

  @Prop()
  created_at: Date

  @Prop()
  updated_at: Date
}

export type UserDocument = User & Document

export const UserSchema = SchemaFactory.createForClass(User)
