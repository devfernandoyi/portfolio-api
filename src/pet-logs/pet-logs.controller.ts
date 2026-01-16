import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { PetLogsService } from './pet-logs.service';
import { Pet } from 'src/pets/pets.entity';
import { CreatePetLogDto } from './create-pet-log.dto';
import { PetLog } from './pet-logs.entity';

@Controller('pet-logs')
export class PetLogsController {
  constructor(private petLogsService: PetLogsService) {}

  @Post()
  async save(@Body() logData: CreatePetLogDto): Promise<PetLog> {
    return await this.petLogsService.create(logData);
  }

  @Get()
  async findAll(): Promise<PetLog[]> {
    return await this.petLogsService.findAll();
  }

  @Get('latest')
  async findLatest(
    @Query('petId') petId: number,
    @Query('limit') limit: number,
  ): Promise<PetLog[]> {
    return await this.petLogsService.findLatest(petId, limit);
  }
}
