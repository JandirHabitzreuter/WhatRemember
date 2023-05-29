import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ThemesModule } from './themes/themes.module';
import { PrismaService } from '@database/database.service';
import { PhrasesModule } from './phrases/phrases.module';
import { UsersModule } from './users/users.module';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from 'authorizathion/authorizathion.guard';
import { AuthenticationModule } from './authentication/authentication.module';
import { AuthenticationService } from './authentication/authentication.service';
import { JwtService } from '@nestjs/jwt';
import { JwtAuthGuard } from 'authentication/jwt-auth.guard';

@Module({
  imports: [ThemesModule, PhrasesModule, UsersModule, AuthenticationModule],
  controllers: [AppController],
  providers: [PrismaService,
              AppService,
              AuthenticationService,
              JwtService, 
              {provide: APP_GUARD,
               useClass: JwtAuthGuard},
              {provide: APP_GUARD,
               useClass: RolesGuard},
              
              ],

})
export class AppModule {}
