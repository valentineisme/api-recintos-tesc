import { Controller, Get } from '@nestjs/common';
import { CredVeiService } from './cred-vei.service';
import { CredVeiDto } from './cred-vei.dto';
import { Cron, CronExpression } from '@nestjs/schedule';

@Controller('cred-vei')
export class CredVeiController {
    constructor(private readonly credVeiService: CredVeiService) {}

    
    @Get()
    //@Cron(CronExpression.EVERY_10_SECONDS)
    async findAll(): Promise<CredVeiDto[]> {
        return this.credVeiService.findAll();
    }
}
