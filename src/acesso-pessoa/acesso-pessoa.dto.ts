import { IsString, Length, MaxLength } from "class-validator";

export class AcessoPessoaDto {
    recinto: string;
    doc: string;
    nome: string;
    direcao: string;
    dispositivo: string;
    dataocorrencia: Date;
    datacriacao?: Date;
}
