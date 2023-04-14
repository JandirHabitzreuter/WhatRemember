import { Controller, Get, Post, Body, Put, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { PhrasesService } from './phrases.service';
import { CreatePhraseDto } from './dto/create-phrase.dto';
import { UpdatePhraseDto } from './dto/update-phrase.dto';
import { PhraseDto } from './dto/Phrase.dto';

@ApiResponse({
  status: HttpStatus.FORBIDDEN,
  description: 'Forbidden.',
})

@ApiBearerAuth('access-token')
@ApiTags('phrases')
@Controller('phrases')

@Controller('phrases')
export class PhrasesController {
  constructor(private readonly phrasesService: PhrasesService) {}

  @ApiOperation({ summary: 'Create a new phrase' })
  @ApiBody({
    type: CreatePhraseDto,
    description: 'Create a new phrase',
    required: true,
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The phrase has been successfully created.',
  })
  @ApiResponse({
    status: HttpStatus.UNPROCESSABLE_ENTITY,
    description: 'The phrase already exists.',
  })
  @Post()
  create(@Body() createPhraseDto: CreatePhraseDto) {
    return this.phrasesService.create(createPhraseDto);
  }

  @ApiOperation({ summary: 'List phrases' })
  @ApiResponse({
    status: HttpStatus.OK,
    type: PhraseDto    
  })
  @Get()
  findAll() {
    return this.phrasesService.findAll();
  } 

  @ApiOperation({ summary: 'Update a phrase' })
  @ApiBody({
    type: UpdatePhraseDto,
    description: 'Update a phrase',
    required: true,
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The phrase has been successfully updated.',
  })
  @ApiResponse({
    status: HttpStatus.UNPROCESSABLE_ENTITY,
    description: 'The phrase was not found.',
  })  
  @HttpCode(HttpStatus.OK)
  @Put(':id')
  update(@Param('id') id: string, @Body() updatePhraseDto: UpdatePhraseDto) {
    return this.phrasesService.update(id, updatePhraseDto);
  }

  @ApiOperation({ summary: 'Delete a phrase' })
  @Delete(':id')  
  @HttpCode(HttpStatus.OK)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.phrasesService.remove(id);
  }
}
