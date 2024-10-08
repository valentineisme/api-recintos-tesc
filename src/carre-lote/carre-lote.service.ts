import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CarreLoteEntity } from 'src/db/entities/carre-lote.entity';
import { ExecucoesService } from 'src/execucoes/execucoes.service';
import { Between, Repository } from 'typeorm';
import { CarreLoteDto } from './carre-lote.dto';

@Injectable()
export class CarreLoteService {
    constructor(
        @InjectRepository(CarreLoteEntity)
        private readonly carreLoteRepository: Repository<CarreLoteEntity>,
        private readonly execucaoService: ExecucoesService,
        private readonly httpService: HttpService
    ) { }

    async findAll(): Promise<CarreLoteDto[]> {

        const dataUpdate = new Date();
      
        const carreFound = await this.carreLoteRepository.find({
            where: {
                data_exec : Between (await this.execucaoService.findByProcesso('carreLote'),dataUpdate)
            }
        })

        await this.execucaoService.update('carreLote', dataUpdate);

        for (var i = 0; i != carreFound.length; i++) {

            // const headers = {
            //     Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2ODUxMDgzNjMsImV4cCI6ODY0MDAwMTY4NTAyMTk2M30.bV7hekE9peqMmcelOtelNbC31azbUnuev-x3IsoEf-8`,  
            //   };
        
            //   const response = await firstValueFrom(
            //     this.httpService.post('https://core.apipass.com.br/api/202d4c59-32e6-4003-8e3c-ea399493f049/teste/teste_nestjs', armFound[i], { headers }), 
            //   );
        }
        return carreFound.map(CarreLoteEntity => this.mapEntityDto(CarreLoteEntity));
    }

    private mapEntityDto(carroLoteEntity: CarreLoteEntity): CarreLoteDto {
        return {
            recinto: carroLoteEntity.recinto,
            ndoc: carroLoteEntity.ndoc,
            tdoc: carroLoteEntity.tdoc,
            lote: carroLoteEntity.lote,
            qtde: carroLoteEntity.quantidade,
            dataexec: carroLoteEntity.data_exec
        }
    }
}
