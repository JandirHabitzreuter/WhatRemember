import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ThemesModule } from './themes/themes.module';
import { PrismaService } from '@database/database.service';
import { PhrasesModule } from './phrases/phrases.module';

@Module({
  imports: [ThemesModule, PhrasesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
