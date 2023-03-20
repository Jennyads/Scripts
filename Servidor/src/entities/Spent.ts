import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import { User } from "./User";

@Entity({name:"spents"})
export class Spent{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false, length: 50})
    description: string;

    @Column({nullable: false, type:"decimal"})
    value: number;

    @ManyToOne((type)=>User,{onDelete:"CASCADE"})  //construtor, o ManyToOne está recebendo a chave estrangeira do user
    @JoinColumn({
        name:"iduser",
        referencedColumnName:"id",
        foreignKeyConstraintName:"fk_spean"

    })
    user: User;

}