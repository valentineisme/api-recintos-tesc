import { Module } from '@nestjs/common';
import { ArmLoteController } from './arm-lote.controller';
import { ArmLoteService } from './arm-lote.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExecucoesModule } from 'src/execucoes/execucoes.module';
import { HttpModule } from '@nestjs/axios';
import { ArmLoteEntity } from 'src/db/entities/arm-lote.entity';

@Module({
  controllers: [ArmLoteController],
  imports:[TypeOrmModule.forFeature([ArmLoteEntity]), ExecucoesModule, HttpModule],
  providers: [ArmLoteService]
})
export class ArmLoteModule {}
