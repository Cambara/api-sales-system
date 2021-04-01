import { IRepository } from '../../../../../domain/providers/repositories/repository.provider'
import { Document, FilterQuery, QueryOptions, UpdateQuery } from 'mongoose'

/*
  T Document
  J Modal
  K DTO to add a new object
*/
export type IAbstractRepository<T extends Document, J, K> = IRepository<FilterQuery<T>, QueryOptions, J, UpdateQuery<T>, K>
