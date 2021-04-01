export interface AddDefaultModel {
  _id: string
}

export interface DefaultModel extends AddDefaultModel {
  created_at: Date
  updated_at: Date
}
