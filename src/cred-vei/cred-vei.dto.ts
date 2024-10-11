import { IsString, Length, MaxLength } from "class-validator";

export class CredVeiDto {
    recinto: string;
    preagendamento: string;
    agendamento: string;
    id_placa: string;
    placa: string;
    ano: number;
    modelo: string;
    inicio_pre: Date;
    fim_pre: Date;
    data_agendamento: Date;
    data_exec: Date;
}
