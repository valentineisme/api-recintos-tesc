import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'RECINTOS.geracao_lotes' })
export class GeracaoLoteEntity {

    
    @PrimaryColumn({type: 'nvarchar'})
    id_movestoque: Date;
    @PrimaryColumn({type: 'nvarchar'})
    chave: string;
    @Column({type: 'decimal'})
    peso: number;
    @PrimaryColumn({type: 'varchar'})
    tipo: string;
}