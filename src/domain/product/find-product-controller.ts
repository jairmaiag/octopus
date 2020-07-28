import { Controller, HttpRequest, HttpResponse } from '@/main/protocols'
import { serverError, noContent, ok } from '@/main/helpers/http/http-helpers'
import { ProductRepository } from '@/infra/repository/product-repository'

export class FindProductController implements Controller {
  constructor (private readonly productRepository: ProductRepository) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const products = await this.productRepository.findAll(
        httpRequest.body.attributes, 
        httpRequest.body.filter, 
        httpRequest.body.order)

        return products.length ? ok(products) : noContent()
    } catch (error) {
      serverError(error)
    }
  }
}
