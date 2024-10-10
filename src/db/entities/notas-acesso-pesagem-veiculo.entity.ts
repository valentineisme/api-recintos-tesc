import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'RECINTOS.notas_acesso_pesagem_veiculo' })
export class NotasAcessoPesagemVeiculoEntity {

    
    @PrimaryColumn({type: 'varchar'})
    id_ticket: string;
    @PrimaryColumn({type: 'varchar'})
    chave: string;
}