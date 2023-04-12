import { ApiProperty } from '@nestjs/swagger';
import { Rating_Phrase } from '@prisma/client';
import { Expose, Type } from 'class-transformer';
import { IsEnum, IsIn, IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreatePhraseDto {
  @Expose()
  @IsString()
  @IsNotEmpty()
  description: string;

  @Expose()
  @IsString()
  @IsNotEmpty()
  translate: string;

  @Expose()
  @IsString()
  @IsNotEmpty()
  option1: string;

  @Expose()
  @IsString()
  @IsNotEmpty()
  option2: string;

  @Expose()
  @IsString()
  @IsNotEmpty()
  @IsEnum(Rating_Phrase)
  @ApiProperty({
    enum: Rating_Phrase,
    required: true,
  })
  rating: Rating_Phrase;

  @Expose()
  @IsUUID()
  @IsNotEmpty()
  id_theme: string;
}
