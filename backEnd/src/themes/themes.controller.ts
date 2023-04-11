import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ThemesService } from './themes.service';
import { CreateThemeDto } from './dto/create-theme.dto';

@Controller('themes')
export class ThemesController {
  constructor(private readonly themesService: ThemesService) {}

  @Post()
  create(@Body() body: CreateThemeDto) {
    return this.themesService.create(body);
  }
}
