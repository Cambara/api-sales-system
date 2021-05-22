import { SetMetadata } from '@nestjs/common'
import { Role } from '../../domain/models/role.model'

export const ROLES_KEY = 'roles'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const Roles = (...roles:Role[]) => SetMetadata(ROLES_KEY, roles)
