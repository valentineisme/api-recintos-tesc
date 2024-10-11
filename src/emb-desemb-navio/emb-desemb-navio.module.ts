import { Module } from '@nestjs/common';
import { EmbDesembNavioService } from './emb-desemb-navio.service';
import { EmbDesembNavioController } from './emb-desemb-navio.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmbDesembNavioEntity } from 'src/db/entities/emb-desemb-navio.entity';
import { HttpModule} from '@nestjs/axios';
import { ExecucoesModule } from 'src/execucoes/execucoes.module';

@Module({
  providers: [EmbDesembNavioService],
  imports: [TypeOrmModule.forFeature([EmbDesembNavioEntity]), ExecucoesModule, HttpModule],
  controllers: [EmbDesembNavioController]
})
export class EmbDesembNavioModule {}
