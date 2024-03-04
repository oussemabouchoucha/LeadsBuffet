import { Injectable } from '@nestjs/common';
import { CreateLeadCampaignDto } from './dto/create-lead-campaign.dto';
import { UpdateLeadCampaignDto } from './dto/update-lead-campaign.dto';

@Injectable()
export class LeadCampaignService {
  create(createLeadCampaignDto: CreateLeadCampaignDto) {
    return 'This action adds a new leadCampaign';
  }

  findAll() {
    return `This action returns all leadCampaign`;
  }

  findOne(id: number) {
    return `This action returns a #${id} leadCampaign`;
  }

  update(id: number, updateLeadCampaignDto: UpdateLeadCampaignDto) {
    return `This action updates a #${id} leadCampaign`;
  }

  remove(id: number) {
    return `This action removes a #${id} leadCampaign`;
  }
}
