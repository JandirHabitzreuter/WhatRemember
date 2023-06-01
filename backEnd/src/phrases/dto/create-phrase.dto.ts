import { Expose } from 'class-transformer';
import { IsEnum, IsNotEmpty, IsString, IsUUID } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';
import { Rating_Phrase } from '@prisma/client';

export class CreatePhraseDto {
  @Expose()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    required: false,
    description: 'The description of the phrase',
    example: 'My phrase is correct!',
  })
  description: string;

  @Expose()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    required: false,
    description: 'The correct translation of the phrase',
    example: 'Minha frase está correta!',
  })
  translate: string;

  @Expose()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    required: false,
    description: 'The incorrect translation of the phrase',
    example: 'Minha pergunta está correta!',
  })
  option1: string;

  @Expose()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    required: false,
    description: 'The incorrect translation of the phras',
    example: 'Minha frase está incorreta!',
  })
  option2: string;

  @Expose()
  @IsString()
  @IsNotEmpty()
  @IsEnum(Rating_Phrase)
  @ApiProperty({
    enum: Rating_Phrase,
    required: true,
    description: 'The rating of the phrase',
    example: 'EASY',
  })
  rating: Rating_Phrase;

  @Expose()
  @IsUUID()
  @IsNotEmpty()
  id_theme: string;
}
