import { Test, TestingModule } from '@nestjs/testing';
import { LeadCampaignController } from './lead-campaign.controller';
import { LeadCampaignService } from './lead-campaign.service';

describe('LeadCampaignController', () => {
  let controller: LeadCampaignController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LeadCampaignController],
      providers: [LeadCampaignService],
    }).compile();

    controller = module.get<LeadCampaignController>(LeadCampaignController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
