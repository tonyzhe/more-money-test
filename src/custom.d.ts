type RecordItem = {
  tags: Tag[]
  notes: string
  types: string
  amount: number
  createdAt?: Date
}
type Tag = {
  id: string
  name: string
}
type TagListModel = {
  data: Tag[]
  fetch: () => Tag[]
  create: (name: string) => 'duplicated' | 'success'
  update: (id: string, name: string) => 'success' | 'duplicated' | 'not found'
  remove: (id: string) => void
  save: () => void


}

