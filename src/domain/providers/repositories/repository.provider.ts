/*
T FilterQuery
J FindOptionsQuery
I Model
O UpdateQuery
P AddModel
*/
export interface IRepository<T, J, I, O, P> {

  find(
    cond: T,
    project?: unknown | null,
    options?: J
  ):Promise<I[]>
  findOne(cond:T, project?: unknown):Promise<I | null>
  create(obj:P):Promise<I>
  deleteById(id:string):Promise<I | null>
  update(cond:T, update:O):Promise<boolean>
  count(cond:T):Promise<number>
}
