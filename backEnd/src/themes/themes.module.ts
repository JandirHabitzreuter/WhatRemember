import { PrismaService } from '@database/database.service';
import { Module } from '@nestjs/common';

import { ThemesController } from './themes.controller';
import { ThemesService } from './themes.service';

@Module({
  controllers: [ThemesController],
  providers: [PrismaService, ThemesService],
})
export class ThemesModule {}
