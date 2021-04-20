import { Prop } from '@nestjs/mongoose'

export abstract class BaseSchema {
  @Prop()
  _id: string
}
