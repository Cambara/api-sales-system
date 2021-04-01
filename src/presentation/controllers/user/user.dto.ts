import * as Joi from 'joi'

export const UserJoiSchema = Joi.object({
  name: Joi.string().required(),
  roles: Joi.array().items(Joi.string()).required()
})

export class CreateUserDto {
  name: string
  roles: string[]
}
