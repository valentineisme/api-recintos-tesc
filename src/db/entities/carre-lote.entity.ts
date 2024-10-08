import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'RECINTOS.carregamento_lote' })
export class CarreLoteEntity {
    @Column({type: 'varchar'})
    recinto: string;
    @PrimaryColumn({type: 'varchar'})
    ndoc: string;
    @Column({type: 'varchar'})
    tdoc: string;
    @PrimaryColumn({type: 'varchar'})
    lote: string;
    @Column({type: 'numeric'})
    quantidade: number;
    @PrimaryColumn({type: 'datetime2'})
    data_exec: Date;
}