import { Module } from '@nestjs/common';
import { CredPessoaController } from './cred-pessoa.controller';
import { CredPessoaService } from './cred-pessoa.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CredPessoaEntity } from 'src/db/entities/cred-pessoa.entity';
import { ExecucoesModule } from 'src/execucoes/execucoes.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  controllers: [CredPessoaController],
  imports:[TypeOrmModule.forFeature([CredPessoaEntity]), ExecucoesModule, HttpModule],
  providers: [CredPessoaService]
})
export class CredPessoaModule {}
