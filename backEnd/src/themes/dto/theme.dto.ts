import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class ThemeDto {
  @Expose()
  @IsUUID()
  @IsNotEmpty()
  @ApiProperty({
    required: true,
    description: 'The name of the theme',
    example: '1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p',
  })
  id: string;

  @Expose()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    required: true,
    description: 'The name of the theme',
    example: 'My Theme',
  })
  name: string;

  @Expose()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    required: true,
    description: 'The description of the theme',
    example: 'This is my theme.',
  })
  description: string;
}
