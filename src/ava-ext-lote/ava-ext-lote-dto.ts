
export class AvaExtLoteDto {
    recinto: string;
    tipo: string;
    codigoAvaria: string;
    descricaoAvaria: string;
    lote: string;
    quantidade: number;
    obs: string;
    dataexec: Date;
}


export interface FindAllParameters{
    dataexec: Date;
}
