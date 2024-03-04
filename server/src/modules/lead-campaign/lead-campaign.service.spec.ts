import { Test, TestingModule } from '@nestjs/testing';
import { LeadCampaignService } from './lead-campaign.service';

describe('LeadCampaignService', () => {
  let service: LeadCampaignService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LeadCampaignService],
    }).compile();

    service = module.get<LeadCampaignService>(LeadCampaignService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
