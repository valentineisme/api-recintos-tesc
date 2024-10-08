import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AvaExtEntity } from 'src/db/entities/ava-ext-lote.entity';
import { ExecucoesService } from 'src/execucoes/execucoes.service';
import { Between, Repository } from 'typeorm';
import { AvaExtLoteDto } from './ava-ext-lote-dto';

@Injectable()
export class AvaExtLoteService {
    constructor(
        @InjectRepository(AvaExtEntity)
        private readonly avaExtRepository: Repository<AvaExtEntity>,
        private readonly execucaoService: ExecucoesService,
        private readonly httpService: HttpService
    ) { }

    async findAll(): Promise<AvaExtLoteDto[]> {

        const dataUpdate = new Date();
      
        const avaFound = await this.avaExtRepository.find({
            where: {
                data_exec : Between (await this.execucaoService.findByProcesso('avaExtLote'),dataUpdate)
            }
        });

        await this.execucaoService.update('avaExtLote', dataUpdate);

        for (var i = 0; i != avaFound.length; i++) {

            // const headers = {
            //     Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2ODUxMDgzNjMsImV4cCI6ODY0MDAwMTY4NTAyMTk2M30.bV7hekE9peqMmcelOtelNbC31azbUnuev-x3IsoEf-8`,  
            //   };
        
            //   const response = await firstValueFrom(
            //     this.httpService.post('https://core.apipass.com.br/api/202d4c59-32e6-4003-8e3c-ea399493f049/teste/teste_nestjs', armFound[i], { headers }), 
            //   );
        }

        return avaFound.map(AvaExtEntity => this.mapEntityDto(AvaExtEntity));
    }

    private mapEntityDto(avaExtEntity: AvaExtEntity): AvaExtLoteDto {
        return {
            recinto: avaExtEntity.recinto,
            tipo: avaExtEntity.tipo,
            codigoAvaria: avaExtEntity.codigo_avaria,
            descricaoAvaria: avaExtEntity.descricao_avaria,
            lote: avaExtEntity.lote,
            quantidade: avaExtEntity.quantidade,
            obs: avaExtEntity.obs,
            dataexec: avaExtEntity.data_exec
        }
    }
}
