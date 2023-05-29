import { Module } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { UsersModule } from 'users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { JwtService } from '@nestjs/jwt';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
            UsersModule, 
            PassportModule,
            JwtModule.register({
              secret: jwtConstants.secret,
              signOptions: { expiresIn: '01h' },
            }),
          ],
  providers: [JwtStrategy, AuthenticationService, LocalStrategy, JwtService],
  exports: [AuthenticationService]
})

export class AuthenticationModule {}
