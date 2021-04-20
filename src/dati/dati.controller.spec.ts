import { Test, TestingModule } from '@nestjs/testing';
import { DatiController } from './dati.controller';

describe('DatiController', () => {
  let controller: DatiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DatiController],
    }).compile();

    controller = module.get<DatiController>(DatiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
