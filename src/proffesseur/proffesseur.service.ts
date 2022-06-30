import { Injectable } from '@nestjs/common';
import { CreateProffesseurDto } from './dto/create-proffesseur.dto';
import { UpdateProffesseurDto } from './dto/update-proffesseur.dto';

@Injectable()
export class ProffesseurService {
  create(createProffesseurDto: CreateProffesseurDto) {
    return 'This action adds a new proffesseur';
  }

  findAll() {
    return `This action returns all proffesseur`;
  }

  findOne(id: number) {
    return `This action returns a #${id} proffesseur`;
  }

  update(id: number, updateProffesseurDto: UpdateProffesseurDto) {
    return `This action updates a #${id} proffesseur`;
  }

  remove(id: number) {
    return `This action removes a #${id} proffesseur`;
  }
}
