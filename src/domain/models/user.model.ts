
export interface UserModel {
  _id: string
  invite_code: string
  email: string
  password: string
  name: string
  roles: string[]
  fk_corporation: string
  is_activated: boolean
  is_blocked: boolean
  created_at: Date
  updated_at: Date
}
