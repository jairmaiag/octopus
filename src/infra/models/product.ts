import {Entity, Column, PrimaryGeneratedColumn, Generated} from 'typeorm'

@Entity()
export class Product {
 
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