/*
T FilterQuery
J FindOptionsQuery
I Modal
O UpdateQuery
*/
export interface IRepository<T, J, I, O> {

  find(
    cond: T,
    project?: unknown | null,
    options?: J
  ):Promise<I[]>
  findOne(cond:T, project?: unknown):Promise<I | null>
  create(obj:I):Promise<I>
  deleteById(id:string):Promise<I | null>
  update(cond:T, update:O):Promise<boolean>
  count(cond:T):Promise<number>
}
