import { PartialType } from '@nestjs/mapped-types';
import { CreateProffesseurDto } from './create-proffesseur.dto';

export class UpdateProffesseurDto extends PartialType(CreateProffesseurDto) {}
