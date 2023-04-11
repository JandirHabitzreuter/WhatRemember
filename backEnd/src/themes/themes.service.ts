import { PrismaService } from '@database/database.service';
import {
  Inject,
  Injectable,
  UnprocessableEntityException,
} from '@nestjs/common';
import { CreateThemeDto } from './dto/create-theme.dto';

@Injectable()
export class ThemesService {
  constructor(@Inject(PrismaService) readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.theme.findMany();
  }

  create(createThemeDto: CreateThemeDto) {
    const theme = this.prisma.theme.findUnique({
      where: {
        name: createThemeDto.name,
      },
    });

    if (theme) {
      throw new UnprocessableEntityException('Theme already exists.');
    }

    return this.prisma.theme.create({
      data: createThemeDto,
    });
  }
}
