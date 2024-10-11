import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GeracaoLoteEntity } from 'src/db/entities/geracao-lote.entity';
import { Repository, Between} from 'typeorm';
import { GeracaoLoteDto } from './geracao-lote.dto';

@Injectable()
export class GeracaoLoteService {
    constructor(
        @InjectRepository(GeracaoLoteEntity)
        private readonly geracaoLoteRepository: Repository<GeracaoLoteEntity>,
    ) { }

    async findAll(movimento: string): Promise<GeracaoLoteDto[]> {

      
        const gerFound = await this.geracaoLoteRepository.find({
            where: {
                id_movestoque : movimento
            }
        });
        
        return gerFound.map(GeracaoLoteEntity => this.mapEntityDto(GeracaoLoteEntity));
    }

    private mapEntityDto(gerLoteEntity: GeracaoLoteEntity): GeracaoLoteDto {
        return {
            id_movestoque: gerLoteEntity.id_movestoque,
            chave: gerLoteEntity.chave,
            peso: gerLoteEntity.peso,
            tipo: gerLoteEntity.tipo
        }
    }
}
