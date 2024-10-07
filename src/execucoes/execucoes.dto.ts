import { IsString, Length, MaxLength } from "class-validator";


export class ExecucaoDto {
    
    processo: string;
    ultima?: Date;
}

export class ExecucaoRouteParameters{
    processo: string;
}
