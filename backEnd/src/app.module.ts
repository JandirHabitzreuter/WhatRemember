import { Module } from '@nestjs/common';

import { PhrasesModule } from './phrases/phrases.module';
import { ThemesModule } from './themes/themes.module';

@Module({
  imports: [ThemesModule, PhrasesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
