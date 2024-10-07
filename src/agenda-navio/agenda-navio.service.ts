import { Injectable } from '@nestjs/common';
import { AgendaNavioEntity } from 'src/db/entities/agenda-navio.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, Repository } from 'typeorm';
import { AgendaNavioDto } from './agenda-navio.dto';
import { ExecucoesService } from 'src/execucoes/execucoes.service';

@Injectable()
export class AgendaNavioService {
    constructor(
        @InjectRepository(AgendaNavioEntity)
        private readonly agendaNavioRepository: Repository<AgendaNavioEntity>,
        private readonly execucaoService: ExecucoesService
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
            console.log(agendaFound[i]);
        }

        return agendaFound.map(acessoPessoaEntity => this.mapEntityDto(acessoPessoaEntity));
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
