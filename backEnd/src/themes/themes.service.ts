import { PrismaService } from '@database/database.service';
import {
  Inject,
  Injectable,
  UnprocessableEntityException,
} from '@nestjs/common';
import { CreateThemeDto } from './dto/create-theme.dto';
import { UpdateThemeDto } from './dto/update-theme.dto';

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

    return this.prisma.theme.create({
      data: createThemeDto,
    });
  }

  async update(id: string, updateThemeDto: UpdateThemeDto) {
    const theme = await this.prisma.theme.findUnique({
      where: {
        id: id,
      },
    });

    if (!theme) {
      throw new UnprocessableEntityException('The Theme was not found.');
    }

    return this.prisma.theme.update({
      where:{
        id: id,
      },
      data:updateThemeDto
    });
  }

  async delete(id : string) {    
    const theme = await this.prisma.theme.findUnique({
      where: {
        id:id,
      },
    });

    if (!theme) {
      throw new UnprocessableEntityException('The Theme was not found.');
    }

    return await this.prisma.theme.delete({
      where:{
        id:id,
      },      
    });
  }


}
