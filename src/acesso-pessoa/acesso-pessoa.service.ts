import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, Repository } from 'typeorm';
import { AcessoPessoaEntity } from 'src/db/entities/acesso-pessoa.entity';
import { ExecucoesService } from 'src/execucoes/execucoes.service';
import { HttpService } from '@nestjs/axios';
import { AcessoPessoaDto } from './acesso-pessoa.dto';

@Injectable()
export class AcessoPessoaService {
    constructor(
        @InjectRepository(AcessoPessoaEntity)
        private readonly acessoPessoaRepository: Repository<AcessoPessoaEntity>,
        private readonly execucaoService: ExecucoesService,
        private readonly httpService: HttpService
    ) { }

    async findAll(): Promise<AcessoPessoaDto[]> {

        const dataUpdate = new Date();
      
        const acessoFound = await this.acessoPessoaRepository.find({
            where: {
                datacriacao : Between (await this.execucaoService.findByProcesso('acessoPessoas'),dataUpdate)
            }
        });

        await this.execucaoService.update('acessoPessoas', dataUpdate);

        for (var i = 0; i != acessoFound.length; i++) {

            // const headers = {
            //     Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2ODUxMDgzNjMsImV4cCI6ODY0MDAwMTY4NTAyMTk2M30.bV7hekE9peqMmcelOtelNbC31azbUnuev-x3IsoEf-8`,  
            //   };
        
            //   const response = await firstValueFrom(
            //     this.httpService.post('https://core.apipass.com.br/api/202d4c59-32e6-4003-8e3c-ea399493f049/teste/teste_nestjs', armFound[i], { headers }), 
            //   );
        }

        return acessoFound.map(ArmLoteEntity => this.mapEntityDto(ArmLoteEntity));
    }

    private mapEntityDto(acessoPessoaEntity: AcessoPessoaEntity): AcessoPessoaDto {
        return {
            recinto: acessoPessoaEntity.recinto,
            doc: acessoPessoaEntity.doc,
            nome: acessoPessoaEntity.nome,
            direcao: acessoPessoaEntity.direcao,
            dispositivo: acessoPessoaEntity.dispositivo,
            dataocorrencia: acessoPessoaEntity.dataocorrencia,
            datacriacao: acessoPessoaEntity.datacriacao,
        }
    }
}
