import { PrismaService } from '@database/database.service';
import {
  Inject,
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';

import { CreatePhraseDto } from './dto/create-phrase.dto';
import { UpdatePhraseDto } from './dto/update-phrase.dto';

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
      throw new NotFoundException('The Theme was not found!');
    }

    const phrase = await this.prisma.phrase.findFirst({
      where: {
        description: createPhraseDto.description,
      },
    });

    if (phrase) {
      throw new UnprocessableEntityException('Phrase already exists.');
    }

    return this.prisma.phrase.create({
      data: createPhraseDto,
    });
  }

  findAll() {
    return this.prisma.phrase.findMany();
  }

  async update(id: string, updatePhraseDto: UpdatePhraseDto) {
    const { id_theme } = updatePhraseDto;

    if (id_theme) {
      const theme = await this.prisma.theme.findFirst({
        where: {
          id: updatePhraseDto.id_theme,
        },
      });

      if (!theme) {
        throw new NotFoundException('The Theme was not found!');
      }
    }

    return this.prisma.phrase.update({
      where: {
        id,
      },
      data: updatePhraseDto,
    });
  }

  async remove(id: string) {
    const phrase = await this.prisma.phrase.findUnique({
      where: {
        id,
      },
    });

    if (!phrase) {
      throw new NotFoundException('The phrase was not found!');
    }

    return this.prisma.phrase.delete({
      where: {
        id,
      },
    });
  }
}
