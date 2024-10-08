
export class CarreLoteDto {
    recinto: string;
    ndoc: string;
    tdoc: string;
    lote: string;
    qtde: number;
    dataexec?: Date;
}


export interface FindAllParameters{
    dataexec: Date;
}
