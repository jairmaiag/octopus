import { PrimaryGeneratedColumn, Column } from "typeorm"

export abstract class Content {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @Column()
  description: string

}

// How to use 
// @Entity()
// export class Photo extends Content {

//     @Column()
//     size: string;

// }