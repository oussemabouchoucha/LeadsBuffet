import { Test, TestingModule } from '@nestjs/testing';
import { EnrichmentApiController } from './enrichment-api.controller';
import { EnrichmentApiService } from './enrichment-api.service';

describe('EnrichmentApiController', () => {
  let controller: EnrichmentApiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EnrichmentApiController],
      providers: [EnrichmentApiService],
    }).compile();

    controller = module.get<EnrichmentApiController>(EnrichmentApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
