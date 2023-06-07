import { compare } from 'bcrypt';
import { UsersService } from 'users/users.service';

import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';

import { jwtConstants } from './constants';

@Injectable()
export class AuthenticationService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(
    email: string,
    pass: string,
  ): Promise<Omit<User, 'password'>> {
    let user: User = null;

    try {
      user = await this.usersService.findUserByEmail(email);
    } catch (err) {
      user = null;
    }

    if (user) {
      const passwordIsCorrect = await compare(pass, user.password);

      if (passwordIsCorrect) {
        const { password, ...result } = user;

        return result;
      }
    }

    return null;
  }

  async login(user: User) {
    const payload: IJwtPayload = {
      email: user.email,
      userId: user.id,
      type: user.type,
    };

    return {
      access_token: this.jwtService.sign(payload, {
        secret: jwtConstants.secret,
      }),
    };
  }
}
