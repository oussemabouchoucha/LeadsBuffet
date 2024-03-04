import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EnrichmentApiService } from './enrichment-api.service';
import { CreateEnrichmentApiDto } from './dto/create-enrichment-api.dto';
import { UpdateEnrichmentApiDto } from './dto/update-enrichment-api.dto';

@Controller('enrichment-api')
export class EnrichmentApiController {
  constructor(private readonly enrichmentApiService: EnrichmentApiService) {}

  @Post()
  create(@Body() createEnrichmentApiDto: CreateEnrichmentApiDto) {
    return this.enrichmentApiService.create(createEnrichmentApiDto);
  }

  @Get()
  findAll() {
    return this.enrichmentApiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.enrichmentApiService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEnrichmentApiDto: UpdateEnrichmentApiDto) {
    return this.enrichmentApiService.update(+id, updateEnrichmentApiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.enrichmentApiService.remove(+id);
  }
}
