import { Body, Controller, Get, Post } from '@nestjs/common';
import { PetsService } from './pets.service';
import { Pet } from './pets.entity';

@Controller('pets')
export class PetsController {
  constructor(private petsService: PetsService) {}

  @Post()
  async save(@Body() petData: Partial<Pet>): Promise<Pet> {
    return await this.petsService.create(petData);
  }

  @Get()
  async findAll(): Promise<Pet[]> {
    return await this.petsService.findAll();
  }
}
