import { Test, TestingModule } from '@nestjs/testing';
import { PetLogsService } from './pet-logs.service';

describe('PetLogsService', () => {
  let service: PetLogsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PetLogsService],
    }).compile();

    service = module.get<PetLogsService>(PetLogsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
