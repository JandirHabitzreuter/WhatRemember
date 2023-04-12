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

  async findAll() {
    return await this.prisma.theme.findMany();
  }

  async create(createThemeDto: CreateThemeDto) {    
    const theme = await this.prisma.theme.findUnique({
      where: {
        name: createThemeDto.name,
      },
    });    

    if (theme) {
      throw new UnprocessableEntityException('Theme already exists.');
    }

    return await this.prisma.theme.create({
      data: createThemeDto,
    });
  }

  async update(updateThemeDto: CreateThemeDto) {
    const theme = await this.prisma.theme.findUnique({
      where: {
        name: updateThemeDto.name,
      },
    });

    if (!theme) {
      throw new UnprocessableEntityException('Theme not found.');
    }

    return await this.prisma.theme.update({
      where:{
        name: updateThemeDto.name,
      },
      data:{
        description: updateThemeDto.description
      }
    });
  }

  async delete(themes : string) {    
    const theme = await this.prisma.theme.findUnique({
      where: {
        name: themes,
      },
    });

    if (!theme) {
      throw new UnprocessableEntityException('Theme not found.');
    }

    return await this.prisma.theme.delete({
      where:{
        name: themes,
      },      
    });
  }


}
