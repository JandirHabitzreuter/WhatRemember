import { Public } from 'decorators/public.decorator';
import { Roles } from 'decorators/roles.decorator';

import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
} from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Type_user } from '@prisma/client';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserDto } from './dto/user.dto';
import { UsersService } from './users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({ summary: 'Create a new user!' })
  @ApiBody({
    type: CreateUserDto,
    description: 'Create a new user',
    required: true,
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The user has been successfully created.',
  })
  @ApiResponse({
    status: HttpStatus.UNPROCESSABLE_ENTITY,
    description: 'The email is already being used!',
  })
  @ApiResponse({
    status: HttpStatus.UNPROCESSABLE_ENTITY,
    description: 'The user name is already being used!',
  })
  @Public()
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @ApiOperation({ summary: 'List All Users!' })
  @ApiResponse({
    status: HttpStatus.OK,
    type: UserDto,
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: 'User has not authorated to used this function!',
  })
  @Roles(Type_user.ADMIN)
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @ApiOperation({ summary: 'Update email, UserName or Type for User!' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The user has been successfully updated!',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'The user was not found!',
  })
  @ApiResponse({
    status: HttpStatus.UNPROCESSABLE_ENTITY,
    description: 'The email is already being used!',
  })
  @ApiResponse({
    status: HttpStatus.UNPROCESSABLE_ENTITY,
    description: 'The user name is already being used!',
  })
  @Roles(Type_user.ADMIN)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    console.log('caiu aqui');
    return this.usersService.update(id, updateUserDto);
  }

  @ApiOperation({ summary: 'Delete the user!' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The user has been successfully deleted!',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'The user was not found!',
  })
  @Roles(Type_user.ADMIN)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
