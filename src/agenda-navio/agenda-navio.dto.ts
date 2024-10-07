import { IsString, Length, MaxLength } from "class-validator";


export class AgendaNavioDto {
    recinto: string;
    navio: string;
    imo: string;
    viagem: string;
    escala: string;
    prevChegada: Date;
    prevSaida: Date;
    chegada: Date;
    saida: Date;
    iniOper: Date;
    fimOper: Date;
    dataalteracao?: Date;
}


export interface FindAllParameters{
    dataalteracao: Date;
}
