import { IsString, Length, MaxLength } from "class-validator";

export class CredPessoaDto {
    recinto: string;
    cpf: string;
    inicio: Date;
    fim: Date
    nome: string;
    dataexec: Date;
    datasaida?: Date;
}
