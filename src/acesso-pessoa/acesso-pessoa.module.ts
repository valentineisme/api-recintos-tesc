import { Module } from '@nestjs/common';
import { AcessoPessoaController } from './acesso-pessoa.controller';
import { AcessoPessoaService } from './acesso-pessoa.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AcessoPessoaEntity } from 'src/db/entities/acesso-pessoa.entity';
import { ExecucoesModule } from 'src/execucoes/execucoes.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  controllers: [AcessoPessoaController],
  imports:[TypeOrmModule.forFeature([AcessoPessoaEntity]), ExecucoesModule, HttpModule],
  providers: [AcessoPessoaService]
})
export class AcessoPessoaModule {}
