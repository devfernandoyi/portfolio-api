import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PetLog } from './pet-logs.entity';
import { Repository } from 'typeorm';
import { CreatePetLogDto } from './create-pet-log.dto';

@Injectable()
export class PetLogsService {
  private readonly logger = new Logger(PetLogsService.name);
  constructor(
    @InjectRepository(PetLog)
    private petsLogRepository: Repository<PetLog>,
  ) {}

  async create(logData: CreatePetLogDto): Promise<PetLog> {
    try {
      return await this.petsLogRepository.save(logData);
    } catch (error) {
      this.logger.error(
        `Failed to create pet log details: ${logData}`,
        error.stack,
      );
      throw new InternalServerErrorException(`Failed to create pet log`);
    }
  }

  async findAll(): Promise<PetLog[]> {
    try {
      return await this.petsLogRepository.find();
    } catch (error) {
      this.logger.error(`Failed to fetch all pet logs`, error.stack);
      throw new InternalServerErrorException('Failed to fetch all pet logs');
    }
  }

  async findLatest(petId: number, limit: number): Promise<PetLog[]> {
    try {
      return await this.petsLogRepository.find({
        where: { petId },
        order: { createdAt: 'DESC' },
        take: limit,
      });
    } catch (error) {
      this.logger.error(
        `Failed to fetch latest logs for pet ${petId}`,
        error.stack,
      );
      throw new InternalServerErrorException('Failed to fetch latest logs');
    }
  }
}
