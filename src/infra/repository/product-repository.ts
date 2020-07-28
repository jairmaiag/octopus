import { Product } from "@/infra/models/product"
import { RepositoryProtocol } from '@/infra/protocols/repository-abstract'
import { EntityRepository } from "typeorm"

@EntityRepository(Product)
export class ProductRepository extends RepositoryProtocol<Product> {
  
  // Testes
  // const productRepository = getRepository(Product)
  // const productsX = await productRepository.find()

  async findAll (attributes?: string, filter?: string, order?: string): Promise<Product[]>{
    const products = await this.find()

    // const products = await productRepository.find({ where: { name: "Timber" } })
    // const productsx = await productRepository.createQueryBuilder().where("product.id = :id", { id: 1 }).getOne()
  
    return products
  }

  async findByUUId (UUId: string): Promise<Product>{
    const product = await this.findOne(UUId)
  
    return product
  }
    
  async findById (id: number): Promise<Product>{
    const product = await this.findOne(id)
  
    return product
  }
    
  async createAndSave (productData: Product): Promise<Product>{
    const product = await this.save(productData)
    
    return product
  }
}