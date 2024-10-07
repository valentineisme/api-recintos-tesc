import { Controller, Get } from '@nestjs/common';
import { AgendaNavioService } from './agenda-navio.service';
import { AgendaNavioDto } from './agenda-navio.dto';

@Controller('agenda-navio')
export class AgendaNavioController {
    constructor(private readonly agendaNavioService: AgendaNavioService) {}

    
    @Get()
    //@Cron(CronExpression.EVERY_10_SECONDS)
    async findAll(): Promise<AgendaNavioDto[]> {
        return this.agendaNavioService.findAll();
    }
}
