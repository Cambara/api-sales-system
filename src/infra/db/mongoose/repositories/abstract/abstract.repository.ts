import { IAbstractRepository } from './abstract.protocol'
import { Document, FilterQuery, Model, UpdateQuery, QueryOptions } from 'mongoose'

export abstract class AbstractRepository<T extends Document, J, K> implements IAbstractRepository<T, J, K> {
  protected readonly model:Model<T>

  constructor (model:Model<T>) {
    this.model = model
  }

  async find (cond: FilterQuery<T>, project?: unknown, options?: QueryOptions): Promise<J[]> {
    const projectObj = project || null
    const optionsObj = options || {}
    return this.model.find(cond, projectObj, optionsObj) as unknown as J[]
  }

  async findOne (cond: FilterQuery<T>, project?: unknown): Promise<J | null> {
    const projectObj = project || null
    const doc = await this.model.findOne(cond, projectObj)
    if (!doc) return
    return doc.toJSON() as unknown as J
  }

  async create (obj: K): Promise<J> {
    return this.model.create(obj) as unknown as J
  }

  async deleteById (id: string): Promise<J | null> {
    return this.model.findByIdAndDelete(id) as unknown as J | null
  }

  async update (cond: FilterQuery<T>, update: UpdateQuery<T>): Promise<boolean> {
    const response = await this.model.updateMany(cond, update)
    return response.nModified > 0
  }

  async count (cond: FilterQuery<T>): Promise<number> {
    return this.model.count(cond)
  }
}
