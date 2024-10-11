import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CredVeiculoEntity } from 'src/db/entities/cred-veiculo.entity';
import { ExecucoesService } from 'src/execucoes/execucoes.service';
import { Repository, Between } from 'typeorm';
import { CredVeiDto } from './cred-vei.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class CredVeiService {
    constructor(
        @InjectRepository(CredVeiculoEntity)
        private readonly credVeiculoRepository: Repository<CredVeiculoEntity>,
        private readonly configService: ConfigService,
        private readonly execucaoService: ExecucoesService,
        private readonly httpService: HttpService
    ) { }

    async findAll(): Promise<CredVeiDto[]> {

        const dataUpdate = new Date();
      
        const credVeiFound = await this.credVeiculoRepository.find({
            where: {
                data_exec : Between (await this.execucaoService.findByProcesso('credVei'),dataUpdate)
            }
        });

        await this.execucaoService.update('credVei', dataUpdate);

        for (var i = 0; i != credVeiFound.length; i++) {

            // const headers = {
            //     Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2ODUxMDgzNjMsImV4cCI6ODY0MDAwMTY4NTAyMTk2M30.bV7hekE9peqMmcelOtelNbC31azbUnuev-x3IsoEf-8`,  
            //   };
        
            //   const response = await firstValueFrom(
            //     this.httpService.post('https://core.apipass.com.br/api/202d4c59-32e6-4003-8e3c-ea399493f049/teste/teste_nestjs', armFound[i], { headers }), 
            //   );
        }

        return credVeiFound.map(CredVeiculoEntity => this.mapEntityDto(CredVeiculoEntity));
    }

    private mapEntityDto(credVeiEntity: CredVeiculoEntity): CredVeiDto {
        return {
            recinto: this.configService.get<string>(credVeiEntity.recinto),
            preagendamento:  credVeiEntity.preagendamento,
            agendamento:  credVeiEntity.agendamento,
            id_placa:  credVeiEntity.id_placa,
            placa:  credVeiEntity.placa,
            ano:  credVeiEntity.ano,
            modelo:  credVeiEntity.modelo,
            inicio_pre: credVeiEntity.inicio_pre,
            fim_pre:  credVeiEntity.fim_pre,
            data_agendamento:  credVeiEntity.data_agendamento,
            data_exec:  credVeiEntity.data_exec,
        }
    }
}
