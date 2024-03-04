import { Module } from '@nestjs/common';
import { EnrichmentApiService } from './enrichment-api.service';
import { EnrichmentApiController } from './enrichment-api.controller';

@Module({
  controllers: [EnrichmentApiController],
  providers: [EnrichmentApiService],
})
export class EnrichmentApiModule {}
