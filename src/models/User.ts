import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string

    @Column()
    phone: string

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

}

export const userSchema = {
    id :{ type: 'number', required: true, example: 1 }
}
