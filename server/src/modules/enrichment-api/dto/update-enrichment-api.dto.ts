import { PartialType } from '@nestjs/swagger';
import { CreateEnrichmentApiDto } from './create-enrichment-api.dto';

export class UpdateEnrichmentApiDto extends PartialType(CreateEnrichmentApiDto) {}
