import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExecucoesService } from 'src/execucoes/execucoes.service';
import { Between, Repository } from 'typeorm';
import { CredPessoaDto } from './cred-pessoa.dto';
import { CredPessoaEntity } from 'src/db/entities/cred-pessoa.entity';

@Injectable()
export class CredPessoaService {
    constructor(
        @InjectRepository(CredPessoaEntity)
        private readonly credPessoaRepository: Repository<CredPessoaEntity>,
        private readonly execucaoService: ExecucoesService,
        private readonly httpService: HttpService
    ) { }

    async findAll(): Promise<CredPessoaDto[]> {

        const dataUpdate = new Date();
      
        const credPessoaFound = await this.credPessoaRepository.find({
            where: {
                data_exec : Between (await this.execucaoService.findByProcesso('credPessoa'),dataUpdate)
            }
        });

        await this.execucaoService.update('credPessoa', dataUpdate);

        for (var i = 0; i != credPessoaFound.length; i++) {

            // const headers = {
            //     Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2ODUxMDgzNjMsImV4cCI6ODY0MDAwMTY4NTAyMTk2M30.bV7hekE9peqMmcelOtelNbC31azbUnuev-x3IsoEf-8`,  
            //   };
        
            //   const response = await firstValueFrom(
            //     this.httpService.post('https://core.apipass.com.br/api/202d4c59-32e6-4003-8e3c-ea399493f049/teste/teste_nestjs', armFound[i], { headers }), 
            //   );
        }

        return credPessoaFound.map(ArmLoteEntity => this.mapEntityDto(ArmLoteEntity));
    }

    private mapEntityDto(credPessoaEntity: CredPessoaEntity): CredPessoaDto {
        return {
            recinto: credPessoaEntity.recinto,
            cpf: credPessoaEntity.cpf,
            inicio: credPessoaEntity.inicio,
            fim: credPessoaEntity.fim,
            nome: credPessoaEntity.nome,
            dataexec: credPessoaEntity.data_exec,
            datasaida: credPessoaEntity.data_saida,
        }
    }
}
