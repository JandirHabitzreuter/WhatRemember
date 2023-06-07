import { AppController } from 'app.controller';
import { AppService } from 'app.service';
import { JwtAuthGuard } from 'authentication/jwt-auth.guard';
import { RolesGuard } from 'authorizathion/authorizathion.guard';
import { ThemesModule } from 'themes/themes.module';

import { PrismaService } from '@database/database.service';
import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';

import { AuthenticationModule } from './authentication/authentication.module';
import { PhrasesModule } from './phrases/phrases.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ThemesModule, PhrasesModule, UsersModule, AuthenticationModule],
  controllers: [AppController],
  providers: [
    PrismaService,
    AppService,
    { provide: APP_GUARD, useClass: JwtAuthGuard },
    { provide: APP_GUARD, useClass: RolesGuard },
  ],
})
export class AppModule {}
