import { Controller, Get } from '@nestjs/common';
import { CarreLoteService } from './carre-lote.service';
import { CarreLoteDto } from './carre-lote.dto';
import { Cron, CronExpression } from '@nestjs/schedule';

@Controller('carre-lote')
export class CarreLoteController {
    constructor(private readonly carreLoteService: CarreLoteService) {}

    
    @Get()
    //@Cron(CronExpression.EVERY_10_SECONDS)
    async findAll(): Promise<CarreLoteDto[]> {
        return this.carreLoteService.findAll();
    }
}
