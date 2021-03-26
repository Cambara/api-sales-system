import { Schema } from '@nestjs/mongoose'
import { applyDecorators } from '@nestjs/common'
import { defaultSchemaConfig } from '../helpers/schema.helper'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function DefaultSchema () {
  return applyDecorators(
    Schema(defaultSchemaConfig)
  )
}
