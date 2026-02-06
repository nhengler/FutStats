import { Test, TestingModule } from '@nestjs/testing';
import { ApiFootballController } from './api-football.controller';

describe('ApiFootballController', () => {
  let controller: ApiFootballController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApiFootballController],
    }).compile();

    controller = module.get<ApiFootballController>(ApiFootballController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
