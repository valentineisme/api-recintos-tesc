import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'RECINTOS.emb_desemb_navio' })
export class EmbDesembNavioEntity {
    @Column({type: 'varchar'})
    recinto: string;
    @Column({type: 'varchar'})
    sentido: string;
    @PrimaryColumn({type: 'float'})
    peso_man: number;
    @Column({type: 'float'})
    peso_oper: number;
    @PrimaryColumn({type: 'varchar'})
    navio: string;
    @Column({type: 'varchar'})
    imo: string;
    @Column({type: 'varchar'})
    viagem: string;
    @Column({type: 'varchar'})
    escala: string;
    @Column({type: 'int'})
    id_port_origem: number;
    @Column({type: 'varchar'})
    port_origem: string;
    @Column({type: 'int'})
    id_port_destino: number;
    @Column({type: 'varchar'})
    port_destino: string;
    @Column({type: 'varchar'})
    berc: string;
    @PrimaryColumn({type: 'datetime2'})
    data_exec: Date;
}