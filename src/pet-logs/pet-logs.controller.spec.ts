import { Test, TestingModule } from '@nestjs/testing';
import { PetLogsController } from './pet-logs.controller';

describe('PetLogsController', () => {
  let controller: PetLogsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PetLogsController],
    }).compile();

    controller = module.get<PetLogsController>(PetLogsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
