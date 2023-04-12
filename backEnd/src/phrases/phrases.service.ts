import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreatePhraseDto } from './dto/create-phrase.dto';
import { UpdatePhraseDto } from './dto/update-phrase.dto';
import { PrismaService } from '@database/database.service';

@Injectable()
export class PhrasesService {
  constructor(@Inject(PrismaService) private prisma: PrismaService) {}

  async create(createPhraseDto: CreatePhraseDto) {
    const theme = await this.prisma.theme.findFirst({
      where: {
        id: createPhraseDto.id_theme,
      },
    });

    if (!theme) {
      throw new NotFoundException('Theme not found');
    }

    return this.prisma.phrase.create({
      data: createPhraseDto,
    });
  }

  findAll() {
    return this.prisma.phrase.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} phrase`;
  }

  update(id: number, updatePhraseDto: UpdatePhraseDto) {
    return `This action updates a #${id} phrase`;
  }

  remove(id: number) {
    return `This action removes a #${id} phrase`;
  }
}
