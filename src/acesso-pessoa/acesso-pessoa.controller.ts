import { Controller, Get } from '@nestjs/common';
import { AcessoPessoaService } from './acesso-pessoa.service';
import { AcessoPessoaDto } from './acesso-pessoa.dto';
import { Cron, CronExpression } from '@nestjs/schedule';

@Controller('acesso-pessoa')
export class AcessoPessoaController {
    constructor(private readonly acessoPessoaService: AcessoPessoaService) {}

    
    @Get()
    //@Cron(CronExpression.EVERY_10_SECONDS)
    async findAll(): Promise<AcessoPessoaDto[]> {
        return this.acessoPessoaService.findAll();
    }
}
