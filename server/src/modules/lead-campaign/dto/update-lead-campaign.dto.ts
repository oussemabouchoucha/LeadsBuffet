import { PartialType } from '@nestjs/swagger';
import { CreateLeadCampaignDto } from './create-lead-campaign.dto';

export class UpdateLeadCampaignDto extends PartialType(CreateLeadCampaignDto) {}
