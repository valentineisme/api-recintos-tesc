import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'RECINTOS.Execucoes' })
export class ExecucoesEntity {

    
    @Column({type: 'datetime'})
    ultima: Date;
    @PrimaryColumn({type: 'varchar'})
    processo: string;
}