import { Controller } from '@/main/protocols'
import { ProductRepository } from '@/infra/repository/product-repository'
import { SaveProductController } from './save-product-controller'
import { FindProductController } from './find-product-controller'
import { getCustomRepository } from 'typeorm'

export const makeSaveProductController = (): Controller => {
  const productRepository = getCustomRepository(ProductRepository);
  const controller = new SaveProductController(productRepository)
  
  return controller
}

export const makeFindProductController = (): Controller => {
  // const productRepositoryX = new ProductRepository()
  const productRepository = getCustomRepository(ProductRepository);
  const controller = new FindProductController(productRepository)
  
  return controller

}
