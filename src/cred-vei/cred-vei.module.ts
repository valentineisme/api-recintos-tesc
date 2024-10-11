import { Module } from '@nestjs/common';
import { CredVeiService } from './cred-vei.service';
import { CredVeiController } from './cred-vei.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CredVeiculoEntity } from 'src/db/entities/cred-veiculo.entity';
import { ExecucoesModule } from 'src/execucoes/execucoes.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  providers: [CredVeiService],
  imports: [TypeOrmModule.forFeature([CredVeiculoEntity]), ExecucoesModule, HttpModule],
  controllers: [CredVeiController]
})
export class CredVeiModule {}
