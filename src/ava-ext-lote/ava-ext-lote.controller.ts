import { Controller, Get } from '@nestjs/common';
import { AvaExtLoteService } from './ava-ext-lote.service';
import { AvaExtLoteDto } from './ava-ext-lote-dto';
import { Cron, CronExpression } from '@nestjs/schedule';

@Controller('ava-ext-lote')
export class AvaExtLoteController {
    constructor(private readonly avaExtLoteService: AvaExtLoteService) {}

    
    @Get()
    //@Cron(CronExpression.EVERY_10_SECONDS)
    async findAll(): Promise<AvaExtLoteDto[]> {
        return this.avaExtLoteService.findAll();
    }
}
