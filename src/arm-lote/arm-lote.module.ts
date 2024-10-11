import { Module } from '@nestjs/common';
import { ArmLoteController } from './arm-lote.controller';
import { ArmLoteService } from './arm-lote.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExecucoesModule } from 'src/execucoes/execucoes.module';
import { HttpModule } from '@nestjs/axios';
import { ArmLoteEntity } from 'src/db/entities/arm-lote.entity';
import { GeracaoLoteModule } from 'src/geracao-lote/geracao-lote.module';
import { ControleLoteEntity } from 'src/db/entities/controle-lote.entity';

@Module({
  controllers: [ArmLoteController],
  imports:[TypeOrmModule.forFeature([ArmLoteEntity, ControleLoteEntity]), ExecucoesModule, HttpModule, GeracaoLoteModule],
  providers: [ArmLoteService]
})
export class ArmLoteModule {}
