import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { EmbDesembNavioEntity } from 'src/db/entities/emb-desemb-navio.entity';
import { ExecucoesService } from 'src/execucoes/execucoes.service';
import { Repository, Between } from 'typeorm';
import { EmbDesembNavioDto } from './emb-desemb-navio.dto';

@Injectable()
export class EmbDesembNavioService {
    constructor(
        @InjectRepository(EmbDesembNavioEntity)
        private readonly embDesembRepository: Repository<EmbDesembNavioEntity>,
        private readonly configService: ConfigService,
        private readonly execucaoService: ExecucoesService,
        private readonly httpService: HttpService
    ) { }

    async findAll(): Promise<EmbDesembNavioDto[]> {

        const dataUpdate = new Date();
      
        const navioFound = await this.embDesembRepository.find({
            where: {
                data_exec : Between (await this.execucaoService.findByProcesso('embDesembNavio'),dataUpdate)
            }
        });

        await this.execucaoService.update('embDesembNavio', dataUpdate);

        for (var i = 0; i != navioFound.length; i++) {

            // const headers = {
            //     Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2ODUxMDgzNjMsImV4cCI6ODY0MDAwMTY4NTAyMTk2M30.bV7hekE9peqMmcelOtelNbC31azbUnuev-x3IsoEf-8`,  
            //   };
        
            //   const response = await firstValueFrom(
            //     this.httpService.post('https://core.apipass.com.br/api/202d4c59-32e6-4003-8e3c-ea399493f049/teste/teste_nestjs', armFound[i], { headers }), 
            //   );
        }

        return navioFound.map(EmbDesembNavioEntity => this.mapEntityDto(EmbDesembNavioEntity));
    }

    private mapEntityDto(embDesembEntity: EmbDesembNavioEntity): EmbDesembNavioDto {
        return {
            recinto: this.configService.get<string>(embDesembEntity.recinto),
            sentido: embDesembEntity.sentido,
            peso_man: embDesembEntity.peso_man,
            peso_oper: embDesembEntity.peso_oper,
            navio: embDesembEntity.navio,
            imo: embDesembEntity.imo,
            viagem: embDesembEntity.viagem,
            escala: embDesembEntity.escala,
            id_port_origem: embDesembEntity.id_port_origem,
            port_origem: embDesembEntity.port_origem,
            id_port_destino: embDesembEntity.id_port_destino,
            port_destino: embDesembEntity.port_destino,
            berc: embDesembEntity.berc,
            data_exec: embDesembEntity.data_exec,
        }
    }
}
