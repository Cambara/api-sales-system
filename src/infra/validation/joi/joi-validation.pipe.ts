import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common'
import { ObjectSchema } from 'joi'

@Injectable()
export class JoiValidationPipe implements PipeTransform {
  constructor (private schema: ObjectSchema) {}

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  transform (value: unknown) {
    const { error } = this.schema.validate(value)
    if (error) {
      throw new BadRequestException(error.message)
    }
    return value
  }
}
