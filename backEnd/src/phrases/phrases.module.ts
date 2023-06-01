import { PrismaService } from '@database/database.service';
import { Module } from '@nestjs/common';

import { PhrasesController } from './phrases.controller';
import { PhrasesService } from './phrases.service';

@Module({
  controllers: [PhrasesController],
  providers: [PrismaService, PhrasesService],
})
export class PhrasesModule {}
