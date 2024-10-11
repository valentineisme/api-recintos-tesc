import { Controller, Get } from '@nestjs/common';
import { EmbDesembNavioService } from './emb-desemb-navio.service';
import { EmbDesembNavioDto } from './emb-desemb-navio.dto';

@Controller('emb-desemb-navio')
export class EmbDesembNavioController {
    constructor(private readonly navioService: EmbDesembNavioService) {}

    
    @Get()
    //@Cron(CronExpression.EVERY_10_SECONDS)
    async findAll(): Promise<EmbDesembNavioDto[]> {
        return this.navioService.findAll();
    }
}
