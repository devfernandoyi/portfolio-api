import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pet } from './pets.entity';

@Injectable()
export class PetsService {
  constructor(
    @InjectRepository(Pet)
    private readonly petsRepository: Repository<Pet>,
  ) {}

  async create(petData: Partial<Pet>): Promise<Pet> {
    try {
      return await this.petsRepository.save(petData);
    } catch (error) {
      throw new BadRequestException('Failed to create pet');
    }
  }

  async findAll(): Promise<Pet[]> {
    try {
      return await this.petsRepository.find();
    } catch (error) {
      throw new BadRequestException('Failed to create pet');
    }
  }
}
