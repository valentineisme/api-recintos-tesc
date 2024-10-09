import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'RECINTOS.acesso_pessoa' })
export class AcessoPessoaEntity {
    @Column({type: 'varchar'})
    recinto: string;
    @PrimaryColumn({type: 'varchar'})
    doc: string;
    @PrimaryColumn({type: 'varchar'})
    nome: string;
    @Column({type: 'varchar'})
    direcao: string;
    @Column({type: 'varchar'})
    dispositivo: string;
    @PrimaryColumn({type: 'varchar'})
    dataocorrencia: Date;
    @Column({type: 'varchar'})
    datacriacao: Date;
    
}