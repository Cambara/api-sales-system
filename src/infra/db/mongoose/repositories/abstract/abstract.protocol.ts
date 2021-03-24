import { IRepository } from '../../../../../domain/providers/repositories/repository.provider'
import { Document, FilterQuery, QueryOptions, UpdateQuery } from 'mongoose'

export type IAbstractRepository<T extends Document, J> = IRepository<FilterQuery<T>, QueryOptions, J, UpdateQuery<T>>
