import {Column} from "typeorm"

export class Name {

    @Column()
    first: string

    @Column()
    last: string

}

// How to use
// import {Name} from "./Name"
// @Column(type => Name)
// name: Name;