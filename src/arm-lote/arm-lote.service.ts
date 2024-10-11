import * as moment from 'moment';
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, Repository } from 'typeorm';
import { ArmLoteEntity } from 'src/db/entities/arm-lote.entity';
import { ExecucoesService } from 'src/execucoes/execucoes.service';
import { ArmLoteDto } from './arm-lote.dto';
import { firstValueFrom } from 'rxjs';
import { ControleLoteEntity } from 'src/db/entities/controle-lote.entity';
import { GeracaoLoteService } from 'src/geracao-lote/geracao-lote.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ArmLoteService {
    constructor(
        @InjectRepository(ArmLoteEntity)
        private readonly armLoteRepository: Repository<ArmLoteEntity>,
        @InjectRepository(ControleLoteEntity)
        private readonly controleLoteRepository: Repository<ControleLoteEntity>,
        private readonly execucaoService: ExecucoesService,
        private readonly gerLoteService: GeracaoLoteService,
        private readonly configService: ConfigService,
        private readonly httpService: HttpService
    ) { }

    async findAll(): Promise<ArmLoteDto[]> {

        const dataUpdate = new Date();

        const armFound = await this.armLoteRepository.find({
            where: {
                data_exec : Between (await this.execucaoService.findByProcesso('armLote'),dataUpdate)
            }
        });

        await this.execucaoService.update('armLote', dataUpdate);
        
        for (var i = 0; i != armFound.length; i++) {

            var controleLote = await this.findLoteControle(armFound[i].lote);
            if (controleLote == false){
                await this.gerLoteService.findAll(armFound[i].id_movestoque);
            }

            // const headers = {
            //     Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2ODUxMDgzNjMsImV4cCI6ODY0MDAwMTY4NTAyMTk2M30.bV7hekE9peqMmcelOtelNbC31azbUnuev-x3IsoEf-8`,  
            //   };
        
            //   const response = await firstValueFrom(
            //     this.httpService.post('https://core.apipass.com.br/api/202d4c59-32e6-4003-8e3c-ea399493f049/teste/teste_nestjs', armFound[i], { headers }), 
            //   );
        }

        return armFound.map(ArmLoteEntity => this.mapEntityDto(ArmLoteEntity));
    }

    async findLoteControle(lote: string): Promise<boolean> {
        const foundControle = await this.controleLoteRepository.findOne({
            where: { lote }
        })
        this.insertLoteControle(lote);
        return !!foundControle;
    }

    async insertLoteControle(lote: string){
        const newLote = new ControleLoteEntity();

        newLote.criacao = new Date();
        newLote.lote = lote;

        await this.controleLoteRepository.save(newLote);
    }

    private mapEntityDto(armLoteEntity: ArmLoteEntity): ArmLoteDto {
        return {
            recinto: this.configService.get<string>('TESC'),
            lote: armLoteEntity.lote,
            qtde: armLoteEntity.qtde,
            az: armLoteEntity.az
        }
    }
}
