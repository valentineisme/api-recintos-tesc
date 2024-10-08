
export class ArmLoteDto {
    recinto: string;
    lote: string;
    qtde: number;
    az: string;
    dataexec?: Date;
}


export interface FindAllParameters{
    dataexec: Date;
}
