import {Entity, Column, PrimaryGeneratedColumn, Generated} from 'typeorm'

@Entity()
export class Product {
 
    constructor(props: Omit<Product, 'UUId'>, UUId?: string, id?: number){
      Object.assign(this, props)
    }

    @Column()
    @Generated('uuid')
    UUId: string

    @PrimaryGeneratedColumn()
    id: number
 
    @Column({
      length: 100
    })
    name: string
 
    @Column({
      default: 0
    })
    status: number
}