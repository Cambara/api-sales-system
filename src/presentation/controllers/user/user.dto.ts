import * as Joi from 'joi'

export const UserJoiSchema = Joi.object({
  name: Joi.string().required(),
  roles: Joi.array().items(Joi.string()).required()
})

export interface CreateUserDto {
  name: string
  roles: string[]
}
