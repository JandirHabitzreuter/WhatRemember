import { Module } from '@nestjs/common';
import { PhrasesService } from './phrases.service';
import { PhrasesController } from './phrases.controller';
import { PrismaService } from '@database/database.service';

@Module({
  controllers: [PhrasesController],
  providers: [PrismaService, PhrasesService],
})
export class PhrasesModule {}
