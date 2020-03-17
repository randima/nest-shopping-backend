import { BaseEntity, PrimaryGeneratedColumn, Column, Entity, Unique } from "typeorm";
import bcrypt = require('bcrypt');

@Entity()
@Unique(['email'])
export class User extends BaseEntity{ 

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstname:string;

    @Column()
    lastname:string;

    @Column()
    email: string;

    @Column()
    telephone:string;

    @Column()
    password: string;

    @Column()
    salt: string;  

    async validatePassword(password: string): Promise<boolean> {
        const hash = await bcrypt.hash(password, this.salt);
        return hash === this.password;
      }
}