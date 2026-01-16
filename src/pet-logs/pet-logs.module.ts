import { Module } from '@nestjs/common';
import { PetLogsController } from './pet-logs.controller';
import { PetLogsService } from './pet-logs.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PetLog } from './pet-logs.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PetLog])],
  controllers: [PetLogsController],
  providers: [PetLogsService],
})
export class PetLogsModule {}
