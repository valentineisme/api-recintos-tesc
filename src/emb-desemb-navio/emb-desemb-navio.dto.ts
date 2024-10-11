import { IsString, Length, MaxLength } from "class-validator";

export class EmbDesembNavioDto {
    recinto: string;
    sentido: string;
    peso_man: number;
    peso_oper: number;
    navio: string;
    imo: string;
    viagem: string;
    escala: string;
    id_port_origem: number;
    port_origem: string;
    id_port_destino: number;
    port_destino: string;
    berc: string;
    data_exec: Date;
}
