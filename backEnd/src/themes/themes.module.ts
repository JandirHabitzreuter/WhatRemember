import { Module } from '@nestjs/common';
import { ThemesService } from './themes.service';
import { ThemesController } from './themes.controller';
import { PrismaService } from '@database/database.service';

@Module({
  controllers: [ThemesController],
  providers: [PrismaService, ThemesService]
})
export class ThemesModule {}