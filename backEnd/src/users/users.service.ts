import { hash } from 'bcrypt';

import { PrismaService } from '@database/database.service';
import {
  Inject,
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { User } from '@prisma/client';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(@Inject(PrismaService) private prisma: PrismaService) {}

  async verifyIFEmailOrUserNameAlreadyInUse(email: string, username: string) {
    const user = await this.prisma.user.findFirst({
      where: {
        OR: [{ email: email }, { username: username }],
      },
    });

    if (user) {
      if (user.email === email) {
        throw new UnprocessableEntityException('Email is already in use!');
      } else {
        throw new UnprocessableEntityException('UserName is already in use!');
      }
    }
  }

  async create(createUserDto: CreateUserDto) {
    await this.verifyIFEmailOrUserNameAlreadyInUse(
      createUserDto.email,
      createUserDto.username,
    );

    const password = await hash(createUserDto.password, 8);

    return this.prisma.user.create({
      data: { ...createUserDto, password },
    });
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  async findOne(id: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (!user) {
      throw new NotFoundException('User was not found!');
    }

    return user;
  }

  async findUserByUserName(username: string): Promise<User> {
    const user = await this.prisma.user.findFirst({
      where: {
        username,
      },
    });

    if (!user) {
      throw new NotFoundException('Username was not found!');
    }

    return user;
  }

  async findUserByEmail(email: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      throw new NotFoundException('User with this email was not found!');
    }

    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    await this.findOne(id);

    await this.verifyIFEmailOrUserNameAlreadyInUse(
      updateUserDto.email,
      updateUserDto.username,
    );

    return this.prisma.user.update({
      where: {
        id,
      },

      data: updateUserDto,
    });
  }

  async remove(id: string) {
    await this.findOne(id);

    return this.prisma.user.delete({
      where: {
        id,
      },
    });
  }
}
