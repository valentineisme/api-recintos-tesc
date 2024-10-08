import { Controller, Get } from '@nestjs/common';
import { ArmLoteService } from './arm-lote.service';
import { ArmLoteDto } from './arm-lote.dto';
import { Cron, CronExpression } from '@nestjs/schedule';

@Controller('arm-lote')
export class ArmLoteController {
    constructor(private readonly armLoteService: ArmLoteService) {}

    
    @Get()
    //@Cron(CronExpression.EVERY_10_SECONDS)
    async findAll(): Promise<ArmLoteDto[]> {
        return this.armLoteService.findAll();
    }
}
