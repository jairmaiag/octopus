import { Controller, HttpResponse, HttpRequest } from '@/main/protocols'
import { serverError, noContent, ok } from '@/main/helpers/http/http-helpers'
import { InvalidParamError } from '@/main/errors'
import { ProductRepository } from '@/infra/repository/product-repository'
import { Product } from '@/infra/models/product'

export class SaveProductController implements Controller {
  constructor (private readonly productRepository: ProductRepository) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const productModel = new Product(httpRequest.body)
      if (!productModel) {
        throw new InvalidParamError('Testar campos aqui')
      }

      const product = await this.productRepository.createAndSave(productModel)

      return product ? ok(product) : noContent()
    } catch (error) {
      serverError(error)
    }
  }
}
