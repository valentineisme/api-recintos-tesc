import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'RECINTOS.acesso_pesagem_veiculo' })
export class AcessoPesagemVeiculoEntity {

    
    @Column({type: 'varchar'})
    origem: string;
    @Column({type: 'datetime'})
    recinto: Date;
    @PrimaryColumn({type: 'varchar'})
    id_ticket: Date;
    @Column({type: 'varchar'})
    criacao: Date;
    @PrimaryColumn({type: 'varchar'})
    id_entrada: Date;
    @PrimaryColumn({type: 'varchar'})
    id_saida: Date;
    @PrimaryColumn({type: 'datetime2'})
    data_exec: Date;
    @Column({type: 'varchar'})
    operador_cpf: Date;
    @Column({type: 'varchar'})
    sentido: Date;
    @Column({type: 'varchar'})
    placa: Date;
    @Column({type: 'varchar'})
    transport_cnpj: Date;
    @Column({type: 'varchar'})
    transport_nome: Date;
    @Column({type: 'varchar'})
    moto_nome: Date;
    @Column({type: 'varchar'})
    moto_cpf: Date;
    @Column({type: 'varchar'})
    gate: Date;
    @Column({type: 'decimal'})
    peso_bruto: number;
    @Column({type: 'decimal'})
    quantidade: number;
    @Column({type: 'varchar'})
    tara: Date;
    @Column({type: 'varchar'})
    peso_bal: Date;
    @Column({type: 'varchar'})
    balanca: Date;
    @Column({type: 'varchar'})
    cont: Date;
}