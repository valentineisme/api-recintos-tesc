import { Module } from '@nestjs/common';
import { CarreLoteService } from './carre-lote.service';
import { CarreLoteController } from './carre-lote.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarreLoteEntity } from 'src/db/entities/carre-lote.entity';
import { ExecucoesModule } from 'src/execucoes/execucoes.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  providers: [CarreLoteService],
  imports:[TypeOrmModule.forFeature([CarreLoteEntity]), ExecucoesModule, HttpModule],
  controllers: [CarreLoteController]
})
export class CarreLoteModule {}
