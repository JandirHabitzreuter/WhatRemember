import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class CreateThemeDto {
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
