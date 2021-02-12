import { FindAll, FindByUUId, FindById, CreateAndSave } from "./repository-interface"
import { HttpRequest } from '@/main/protocols'

import { Repository } from "typeorm"

export abstract class RepositoryProtocol<T> extends Repository<T> implements FindAll<T>, FindByUUId<T>, FindById<T>, CreateAndSave<T> {

  convertJSONToModel<T>(httpRequest: HttpRequest): T {
    let result = null

    const entity = this.create(httpRequest.body)

    if (entity instanceof Array) {
      result = entity[0]
    } else {
      result = entity
    }
    
    return result
  }

  abstract async createAndSave (data: T): Promise<T>
  
  abstract async findByUUId (UUId: string): Promise<T>
  
  abstract async findById (id: number): Promise<T>
  
  abstract async findAll (attributes?: string, filter?: string, order?: string): Promise<T[]>
}