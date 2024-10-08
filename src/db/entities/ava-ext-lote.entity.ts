import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'RECINTOS.avaria_extravio_lote' })
export class AvaExtEntity {
    @Column({type: 'varchar'})
    recinto: string;
    @PrimaryColumn({type: 'varchar'})
    tipo: string;
    @Column({type: 'varchar'})
    codigo_avaria: string;
    @Column({type: 'varchar'})
    descricao_avaria: string;
    @Column({type: 'varchar'})
    lote: string;
    @Column({type: 'numeric'})
    quantidade: number;
    @Column({type: 'varchar'})
    obs: string;
    @PrimaryColumn({type: 'datetime2'})
    data_exec: Date;
}