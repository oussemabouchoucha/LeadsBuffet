import { Injectable } from '@nestjs/common';
import { CreateEnrichmentApiDto } from './dto/create-enrichment-api.dto';
import { UpdateEnrichmentApiDto } from './dto/update-enrichment-api.dto';

@Injectable()
export class EnrichmentApiService {
  create(createEnrichmentApiDto: CreateEnrichmentApiDto) {
    return 'This action adds a new enrichmentApi';
  }

  findAll() {
    return `This action returns all enrichmentApi`;
  }

  findOne(id: number) {
    return `This action returns a #${id} enrichmentApi`;
  }

  update(id: number, updateEnrichmentApiDto: UpdateEnrichmentApiDto) {
    return `This action updates a #${id} enrichmentApi`;
  }

  remove(id: number) {
    return `This action removes a #${id} enrichmentApi`;
  }
}
