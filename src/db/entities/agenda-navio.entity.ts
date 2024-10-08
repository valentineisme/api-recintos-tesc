import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'RECINTOS.agenda_navio' })
export class AgendaNavioEntity {
    @Column({type: 'varchar'})
    recinto: string;
    @PrimaryColumn({type: 'varchar'})
    navio: string;
    @Column({type: 'varchar'})
    imo: string;
    @PrimaryColumn({type: 'varchar'})
    viagem: string;
    @Column({type: 'varchar'})
    escala: string;
    @Column({type: 'datetime'})
    prevChegada: Date;
    @Column({type: 'datetime'})
    prevSaida: Date;
    @Column({type: 'datetime'})
    chegada: Date;
    @Column({type: 'datetime'})
    saida: Date;
    @Column({type: 'datetime'})
    ini_oper: Date;
    @Column({type: 'datetime'})
    fim_oper: Date;
    @Column({type: 'datetime'})
    dataalteracao: Date;
}