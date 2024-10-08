import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExecucoesEntity } from 'src/db/entities/execucoes.entity';
import { ExecucaoDto } from './execucoes.dto';
import { Repository } from 'typeorm';


@Injectable()
export class ExecucoesService {

    constructor(
        @InjectRepository(ExecucoesEntity)
        private readonly execucoesRepository: Repository<ExecucoesEntity>
    ) { }


    async findByProcesso(processo: string): Promise<Date> {
        const foundProcesso = await this.execucoesRepository.findOne({
            where: { processo }
        })

        var datatual = (foundProcesso.ultima);

        return (datatual);
    }

    async update(processo: string, dataUpdate: Date){
        const foundProcesso = await this.execucoesRepository.findOne({ where: { processo } });

        if (foundProcesso){
            await this.execucoesRepository.update(processo, this.mapDtoToEntity(dataUpdate))
        }
    }

    private mapDtoToEntity(dataUpdate): Partial<ExecucoesEntity>{
        return {
            ultima: dataUpdate
        }
    }

}

