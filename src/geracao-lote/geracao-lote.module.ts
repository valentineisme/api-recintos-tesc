import { Module } from '@nestjs/common';
import { GeracaoLoteService } from './geracao-lote.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GeracaoLoteEntity } from 'src/db/entities/geracao-lote.entity';
import { ExecucoesModule } from 'src/execucoes/execucoes.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports:[TypeOrmModule.forFeature([GeracaoLoteEntity]), ExecucoesModule, HttpModule],
  providers: [GeracaoLoteService],
  exports : [GeracaoLoteService]
})
export class GeracaoLoteModule {}
