import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'RECINTOS.credenciamento_veiculos' })
export class CredVeiculoEntity {
    @Column({type: 'varchar'})
    recinto: string;
    @Column({type: 'varchar'})
    preagendamento: string;
    @PrimaryColumn({type: 'varchar'})
    agendamento: string;
    @Column({type: 'varchar'})
    id_placa: string;
    @Column({type: 'varchar'})
    placa: string;
    @PrimaryColumn({type: 'int'})
    ano: number;
    @PrimaryColumn({type: 'varchar'})
    modelo: string;
    @PrimaryColumn({type: 'datetime2'})
    inicio_pre: Date;
    @PrimaryColumn({type: 'datetime2'})
    fim_pre: Date;
    @PrimaryColumn({type: 'datetime2'})
    data_agendamento: Date;
    @PrimaryColumn({type: 'datetime2'})
    data_exec: Date;
}