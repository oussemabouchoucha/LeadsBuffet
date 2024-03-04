import { Module } from '@nestjs/common';
import { LeadCampaignService } from './lead-campaign.service';
import { LeadCampaignController } from './lead-campaign.controller';

@Module({
  controllers: [LeadCampaignController],
  providers: [LeadCampaignService],
})
export class LeadCampaignModule {}
