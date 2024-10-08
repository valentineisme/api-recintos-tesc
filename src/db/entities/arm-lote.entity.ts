import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'RECINTOS.armazenamento_lote' })
export class ArmLoteEntity {
    @Column({type: 'varchar'})
    recinto: string;
    @PrimaryColumn({type: 'varchar'})
    lote: string;
    @Column({type: 'numeric'})
    qtde: number;
    @Column({type: 'varchar'})
    az: string;
    @PrimaryColumn({type: 'datetime2'})
    data_exec: Date;
}