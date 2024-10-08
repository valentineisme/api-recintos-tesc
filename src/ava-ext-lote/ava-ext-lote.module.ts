import { Module } from '@nestjs/common';
import { AvaExtLoteController } from './ava-ext-lote.controller';
import { AvaExtLoteService } from './ava-ext-lote.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AvaExtEntity } from 'src/db/entities/ava-ext-lote.entity';
import { ExecucoesModule } from 'src/execucoes/execucoes.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  controllers: [AvaExtLoteController],
  imports:[TypeOrmModule.forFeature([AvaExtEntity]), ExecucoesModule, HttpModule],
  providers: [AvaExtLoteService]
})
export class AvaExtLoteModule {}
