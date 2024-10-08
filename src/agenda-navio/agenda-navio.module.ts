import { Module } from '@nestjs/common';
import { AgendaNavioService } from './agenda-navio.service';
import { AgendaNavioController } from './agenda-navio.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AgendaNavioEntity } from 'src/db/entities/agenda-navio.entity';
import { ExecucoesModule } from 'src/execucoes/execucoes.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  controllers:[AgendaNavioController],
  imports:[TypeOrmModule.forFeature([AgendaNavioEntity]), ExecucoesModule, HttpModule],
  providers: [AgendaNavioService]
})
export class AgendaNavioModule {}
