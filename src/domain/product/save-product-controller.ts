import { Controller, HttpResponse, HttpRequest } from '@/main/protocols'
import { serverError, noContent, ok } from '@/main/helpers/http/http-helpers'
import { ProductRepository } from '@/infra/repository/product-repository'
import { Product } from '@/infra/models/product'

export class SaveProductController implements Controller {
  constructor (private readonly productRepository: ProductRepository) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const productModel = this.productRepository.convertJSONToModel<Product>(httpRequest)

      const product = await this.productRepository.createAndSave(productModel)

      return product ? ok(product) : noContent()
    } catch (error) {
      serverError(error)
    }
  }
}
