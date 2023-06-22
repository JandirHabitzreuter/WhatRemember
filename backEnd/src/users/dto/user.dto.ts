import { Expose, Exclude } from 'class-transformer';
import { IsNotEmpty, IsString, IsEnum, IsUUID } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';
import { Type_user } from '@prisma/client';

export class UserDto {
  @Expose()
  @IsUUID()
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    required: true,
    description: 'The ID of the User',
    example: '1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p',
  })
  id: string;

  @Expose()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    required: false,
    description: 'The username for the user',
    example: 'User Example',
  })
  username: string;

  @Expose()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    required: false,
    description: 'The user email',
    example: 'useremail@email.com',
  })
  email: string;

  @IsString()
  @Exclude()
  @IsNotEmpty()
  @ApiProperty({
    required: false,
    description: 'The user password',
    example: 'password1234',
  })
  password: string;

  @Expose()
  @IsString()
  @IsNotEmpty()
  @IsEnum(Type_user)
  @ApiProperty({
    enum: Type_user,
    required: false,
    description: 'Informs if it is a normal user or admin user',
    example: ['ADMIN', 'USER'],
  })
  type: Type_user;
}
