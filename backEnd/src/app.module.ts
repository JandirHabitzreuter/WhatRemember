import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ThemesModule } from './themes/themes.module';
import { PrismaService } from '@database/database.service';

@Module({
  imports: [ThemesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
