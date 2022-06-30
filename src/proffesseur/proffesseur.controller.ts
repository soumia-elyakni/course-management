import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProffesseurService } from './proffesseur.service';
import { CreateProffesseurDto } from './dto/create-proffesseur.dto';
import { UpdateProffesseurDto } from './dto/update-proffesseur.dto';

@Controller('proffesseur')
export class ProffesseurController {
  constructor(private readonly proffesseurService: ProffesseurService) {}

  @Post()
  create(@Body() createProffesseurDto: CreateProffesseurDto) {
    return this.proffesseurService.create(createProffesseurDto);
  }

  @Get()
  findAll() {
    return this.proffesseurService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.proffesseurService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProffesseurDto: UpdateProffesseurDto) {
    return this.proffesseurService.update(+id, updateProffesseurDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.proffesseurService.remove(+id);
  }
}
