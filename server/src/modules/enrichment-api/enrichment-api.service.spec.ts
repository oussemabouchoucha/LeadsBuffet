import { Test, TestingModule } from '@nestjs/testing';
import { EnrichmentApiService } from './enrichment-api.service';

describe('EnrichmentApiService', () => {
  let service: EnrichmentApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EnrichmentApiService],
    }).compile();

    service = module.get<EnrichmentApiService>(EnrichmentApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
