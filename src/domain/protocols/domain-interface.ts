export interface Find<T> {
  find (attributes?: string, filter?: string, order?: string): Promise<T[]>
}

export interface FindByUUId<T> {
  findByUUId (UUId: string): Promise<T>
}

export interface FindById<T> {
  findById (id: number): Promise<T>
}

export interface Save<T> {
  save (data: T): Promise<T>
}
