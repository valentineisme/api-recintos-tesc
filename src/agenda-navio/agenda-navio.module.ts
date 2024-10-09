import { Module } from '@nestjs/common';
import { AgendaNavioService } from './agenda-navio.service';
import { AgendaNavioController } from './agenda-navio.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AgendaNavioEntity, GatilhoAgendaNavioEntity } from 'src/db/entities/agenda-navio.entity';
import { ExecucoesModule } from 'src/execucoes/execucoes.module';
import { HttpModule } from '@nestjs/axios';
import { DbModule } from 'src/db/db.module';

@Module({
  controllers:[AgendaNavioController],
  imports:[TypeOrmModule.forFeature([AgendaNavioEntity, GatilhoAgendaNavioEntity]), ExecucoesModule, HttpModule],
  providers: [AgendaNavioService]
})
export class AgendaNavioModule {}
