import { Injectable } from '@nestjs/common';
import { AgendaNavioEntity } from 'src/db/entities/agenda-navio.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, Repository } from 'typeorm';
import { AgendaNavioDto } from './agenda-navio.dto';
import { ExecucoesService } from 'src/execucoes/execucoes.service';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AgendaNavioService {
    constructor(
        @InjectRepository(AgendaNavioEntity)
        private readonly agendaNavioRepository: Repository<AgendaNavioEntity>,
        private readonly execucaoService: ExecucoesService,
        private readonly httpService: HttpService
    ) { }

    async findAll(): Promise<AgendaNavioDto[]> {

        var dataUpdate = new Date();
        const agendaFound = await this.agendaNavioRepository.find({
            where: {
                dataalteracao : Between (await this.execucaoService.findByProcesso('agendaNavio'),dataUpdate)
            }
        })
                
        await this.execucaoService.update('agendaNavio', dataUpdate)

        for (let i = 0; i != agendaFound.length; i++) {

            // const headers = {
            //     Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2ODUxMDgzNjMsImV4cCI6ODY0MDAwMTY4NTAyMTk2M30.bV7hekE9peqMmcelOtelNbC31azbUnuev-x3IsoEf-8`,  
            //   };
        
            //   const response = await firstValueFrom(
            //     this.httpService.post('https://core.apipass.com.br/api/202d4c59-32e6-4003-8e3c-ea399493f049/teste/teste_nestjs', agendaFound[i], { headers }), 
            //   );
        }

        return agendaFound.map(AgendaNavioEntity => this.mapEntityDto(AgendaNavioEntity));
    }

    private mapEntityDto(agendaNavioEntity: AgendaNavioEntity): AgendaNavioDto {
        return {
            recinto: agendaNavioEntity.recinto,
            navio: agendaNavioEntity.navio,
            imo: agendaNavioEntity.imo,
            viagem: agendaNavioEntity.viagem,
            escala: agendaNavioEntity.escala,
            prevChegada: agendaNavioEntity.prevChegada,
            prevSaida: agendaNavioEntity.prevSaida,
            chegada: agendaNavioEntity.chegada,
            saida: agendaNavioEntity.saida,
            iniOper: agendaNavioEntity.ini_oper,
            fimOper: agendaNavioEntity.fim_oper
        }
    }

}
