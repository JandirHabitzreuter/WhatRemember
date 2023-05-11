import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ThemesModule } from './themes/themes.module';
import { PrismaService } from '@database/database.service';
import { PhrasesModule } from './phrases/phrases.module';
import { UsersModule } from './users/users.module';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from 'authorizathion/authorizathion.guard';
import { AuthenticationGuard } from 'authentication/authentication.guard';

@Module({
  imports: [ThemesModule, PhrasesModule, UsersModule],
  controllers: [],
  providers: [PrismaService,
               {provide: APP_GUARD,
               useClass: AuthenticationGuard},
               {provide: APP_GUARD,
                useClass: RolesGuard},
              
              ],

})
export class AppModule {}
