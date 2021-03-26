import { SchemaOptions } from '@nestjs/mongoose'

export const defaultSchemaConfig = {
  _id: false,
  timestamps:
  {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
  versionKey: false
} as SchemaOptions
