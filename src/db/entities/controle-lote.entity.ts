import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'RECINTOS.Controle_lote' })
export class ControleLoteEntity {

    
    @PrimaryColumn({type: 'varchar'})
    lote: string;
    @Column({type: 'datetime'})
    criacao: Date;
}