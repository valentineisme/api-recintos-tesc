import { Controller, Get } from '@nestjs/common';
import { CredPessoaService } from './cred-pessoa.service';
import { CredPessoaDto } from './cred-pessoa.dto';
import { Cron, CronExpression } from '@nestjs/schedule';

@Controller('cred-pessoa')
export class CredPessoaController {
    constructor(private readonly credPessoaService: CredPessoaService) {}

    
    @Get()
    //@Cron(CronExpression.EVERY_10_SECONDS)
    async findAll(): Promise<CredPessoaDto[]> {
        return this.credPessoaService.findAll();
    }
}
