import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'RECINTOS.credenciamento_pessoas' })
export class CredPessoaEntity {
    @Column({type: 'varchar'})
    recinto: string;
    @PrimaryColumn({type: 'varchar'})
    cpf: string;
    @Column({type: 'date'})
    inicio: Date;
    @Column({type: 'date'})
    fim: Date;
    @PrimaryColumn({type: 'varchar'})
    nome: string;
    @PrimaryColumn({type: 'datetime'})
    data_exec: Date;
    @Column({type: 'date'})
    data_saida: Date;  
}