import { Test, TestingModule } from '@nestjs/testing';
import { ProffesseurController } from './proffesseur.controller';
import { ProffesseurService } from './proffesseur.service';

describe('ProffesseurController', () => {
  let controller: ProffesseurController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProffesseurController],
      providers: [ProffesseurService],
    }).compile();

    controller = module.get<ProffesseurController>(ProffesseurController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
