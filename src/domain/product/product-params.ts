import { Product } from '@/infra/models/product'

export type ProductParams = Omit<Product, 'id'>
