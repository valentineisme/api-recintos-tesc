import { Module } from '@nestjs/common';
import { AgendaNavioController } from './agenda-navio/agenda-navio.controller';
import { AgendaNavioModule } from './agenda-navio/agenda-navio.module';
import { DbModule } from './db/db.module';
import { ExecucoesModule } from './execucoes/execucoes.module';
import { ScheduleModule } from '@nestjs/schedule';
import { ConfigModule } from '@nestjs/config';
import { AgendaNavioService } from './agenda-navio/agenda-navio.service';

@Module({
  imports: [AgendaNavioModule, DbModule, ExecucoesModule,
    ScheduleModule.forRoot(), 
    ConfigModule.forRoot({ isGlobal: true })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
