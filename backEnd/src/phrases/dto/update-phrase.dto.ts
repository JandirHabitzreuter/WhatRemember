import { ApiProperty } from '@nestjs/swagger';
import { Rating_Phrase } from '@prisma/client';
import { Expose } from 'class-transformer';
import { IsEnum, IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdatePhraseDto{
    @Expose()
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    @ApiProperty({  
        required: false,    
        description: 'The description of the phrase',
        example: 'My phrase is correct!',
      })
    description: string;
  
    @Expose()
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    @ApiProperty({  
        required: false,    
        description: 'The correct translation of the phrase',
        example: 'Minha frase está correta!',
      })
    translate: string;
  
    @Expose()
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    @ApiProperty({  
        required: false,    
        description: 'The incorrect translation of the phrase',
        example: 'Minha pergunta está correta!',
      })
    option1: string;
  
    @Expose()
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    @ApiProperty({  
        required: false,    
        description: 'The incorrect translation of the phras',
        example: 'Minha frase está incorreta!',
      })
    option2: string;
  
    @Expose()
    @IsString()
    @IsNotEmpty()
    @IsOptional()
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
    @IsString()
    @IsOptional()
    @ApiProperty({
      required: true,
      description: 'The Theme ID of the phrase',
      example: '1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p',
    })  
  
    id_theme: string;

}
