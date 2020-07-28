export interface FindAll<T> {
  findAll (attributes?: string, filter?: string, order?: string): Promise<T[]>
}

export interface FindByUUId<T> {
  findByUUId (UUId: string): Promise<T>
}

export interface FindById<T> {
  findById (id: number): Promise<T>
}

export interface CreateAndSave<T> {
  createAndSave (data: T): Promise<T>
}
