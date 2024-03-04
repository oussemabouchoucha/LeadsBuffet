import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LeadCampaignService } from './lead-campaign.service';
import { CreateLeadCampaignDto } from './dto/create-lead-campaign.dto';
import { UpdateLeadCampaignDto } from './dto/update-lead-campaign.dto';

@Controller('lead-campaign')
export class LeadCampaignController {
  constructor(private readonly leadCampaignService: LeadCampaignService) {}

  @Post()
  create(@Body() createLeadCampaignDto: CreateLeadCampaignDto) {
    return this.leadCampaignService.create(createLeadCampaignDto);
  }

  @Get()
  findAll() {
    return this.leadCampaignService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.leadCampaignService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLeadCampaignDto: UpdateLeadCampaignDto) {
    return this.leadCampaignService.update(+id, updateLeadCampaignDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.leadCampaignService.remove(+id);
  }
}
