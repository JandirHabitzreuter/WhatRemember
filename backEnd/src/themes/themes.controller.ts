import { Body, Controller, Get, HttpCode, Post, Put, Delete,Param } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateThemeDto } from './dto/create-theme.dto';
import { ThemesService } from './themes.service';
import { ThemeDto } from './dto/theme.dto';
import { UpdateThemeDto } from './dto/update-theme.dto';

@ApiResponse({
  status: 403,
  description: 'Forbidden.',
})
@ApiBearerAuth('access-token')
@ApiTags('themes')
@Controller('themes')
export class ThemesController {
  constructor(private readonly themesService: ThemesService) {}

  @ApiOperation({ summary: 'List themes' })
  @ApiResponse({
    status: 200,
    type: ThemeDto,
  })
  @Get()
  get() {
    return this.themesService.findAll();
  }

  @ApiOperation({ summary: 'Create a new theme' })
  @ApiBody({
    type: CreateThemeDto,
    description: 'Create a new theme',
    required: true,
  })
  @ApiResponse({
    status: 201,
    description: 'The theme has been successfully created.',
  })
  @ApiResponse({
    status: 422,
    description: 'The theme already exists.',
  })
  @Post()
  @HttpCode(201)
  create(@Body() body: CreateThemeDto) {
    return this.themesService.create(body);
  }

  @ApiOperation({ summary: 'Update a theme' })
  @ApiBody({
    type: UpdateThemeDto,
    description: 'Update a theme',
    required: true,
  })
  @ApiResponse({
    status: 201,
    description: 'The theme has been successfully updated.',
  })
  @ApiResponse({
    status: 422,
    description: 'The theme was not found.',
  })
  @Put(':id')
  @HttpCode(201)
  update(@Param('id') id: string, @Body() body: UpdateThemeDto) {
    return this.themesService.update(id, body);
  }
  
  @ApiOperation({ summary: 'Delete a theme' })
  @Delete(':id')  
  @HttpCode(200)
  delete(@Param('id') id: string){    
    return this.themesService.delete(id);
  }
}
