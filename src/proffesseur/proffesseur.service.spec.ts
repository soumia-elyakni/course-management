import { Test, TestingModule } from '@nestjs/testing';
import { ProffesseurService } from './proffesseur.service';

describe('ProffesseurService', () => {
  let service: ProffesseurService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProffesseurService],
    }).compile();

    service = module.get<ProffesseurService>(ProffesseurService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
