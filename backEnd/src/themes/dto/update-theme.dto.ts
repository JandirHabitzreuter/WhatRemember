import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class UpdateThemeDto {
  @Expose()
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty({
    required: false,
    description: 'The name of the theme',
    example: 'My Theme',
  })
  name: string;

  @Expose()
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty({
    required: false,
    description: 'The description of the theme',
    example: 'This is my theme.',
  })
  description: string;
}
