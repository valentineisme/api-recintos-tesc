import { Module } from '@nestjs/common';
import { AgendaNavioController } from './agenda-navio/agenda-navio.controller';
import { AgendaNavioModule } from './agenda-navio/agenda-navio.module';
import { DbModule } from './db/db.module';
import { ExecucoesModule } from './execucoes/execucoes.module';
import { ScheduleModule } from '@nestjs/schedule';
import { ConfigModule } from '@nestjs/config';
import { AgendaNavioService } from './agenda-navio/agenda-navio.service';
import { ArmLoteModule } from './arm-lote/arm-lote.module';
import { AvaExtLoteModule } from './ava-ext-lote/ava-ext-lote.module';
import { CarreLoteModule } from './carre-lote/carre-lote.module';
import { AcessoPessoaModule } from './acesso-pessoa/acesso-pessoa.module';
import { CredPessoaModule } from './cred-pessoa/cred-pessoa.module';
import { GeracaoLoteModule } from './geracao-lote/geracao-lote.module';
import { CredVeiModule } from './cred-vei/cred-vei.module';
import { EmbDesembNavioModule } from './emb-desemb-navio/emb-desemb-navio.module';

@Module({
  imports: [AgendaNavioModule, DbModule, ExecucoesModule,
    ScheduleModule.forRoot(), 
    ConfigModule.forRoot({ isGlobal: true }), ArmLoteModule, AvaExtLoteModule, CarreLoteModule, AcessoPessoaModule, CredPessoaModule, GeracaoLoteModule, CredVeiModule, EmbDesembNavioModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
