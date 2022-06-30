import { Module } from '@nestjs/common';
import { ProffesseurService } from './proffesseur.service';
import { ProffesseurController } from './proffesseur.controller';

@Module({
  controllers: [ProffesseurController],
  providers: [ProffesseurService]
})
export class ProffesseurModule {}
