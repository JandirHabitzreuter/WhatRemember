import { Injectable, Inject } from '@nestjs/common';
import { CreateThemeDto } from './dto/create-theme.dto';
import { UpdateThemeDto } from './dto/update-theme.dto';
import { PrismaService } from '@database/database.service';

@Injectable()
export class ThemesService {

  constructor(@Inject(PrismaService) readonly prisma: PrismaService){}

  create(createThemeDto: CreateThemeDto) {
    return this.prisma.theme.create({
      data: createThemeDto
    });
  }
}
