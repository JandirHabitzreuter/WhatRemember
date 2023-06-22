import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @Expose()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    required: true,
    description: 'The username for the user',
    example: 'User Example',
  })
  username: string;

  @Expose()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    required: true,
    description: 'The user email',
    example: 'useremail@email.com',
  })
  email: string;

  @Expose()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    required: true,
    description: 'The user password',
    example: 'password1234',
  })
  password: string;
}
