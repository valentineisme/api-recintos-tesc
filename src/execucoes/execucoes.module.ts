import { Module } from '@nestjs/common';
import { ExecucoesService } from './execucoes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExecucoesEntity } from 'src/db/entities/execucoes.entity';
import { ExecucoesController } from './execucoes.controller';

@Module({
    controllers: [ExecucoesController],
    imports: [TypeOrmModule.forFeature([ExecucoesEntity])],
    providers: [ExecucoesService],
    exports: [ExecucoesService]
})
export class ExecucoesModule {}