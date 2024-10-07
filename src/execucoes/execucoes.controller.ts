import { Body, Controller, Post, Get, Param, Put, Delete, Query } from '@nestjs/common'
import { ExecucoesService } from './execucoes.service';

@Controller('execucoes')
export class ExecucoesController {

    constructor(private readonly execucoesService: ExecucoesService) {}


    @Get('/:processo')
    async findByProcesso(@Param('processo') processo: string): Promise<Date>{
        return this.execucoesService.findByProcesso(processo);
    }
}