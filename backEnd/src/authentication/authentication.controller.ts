import { Console } from 'console';
import { Public } from 'decorators/public.decorator';

import {
  Controller,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiBody, ApiResponse } from '@nestjs/swagger';

import { AuthenticationService } from './authentication.service';
import { AuthenticationUserDTO } from './dto/authentication-user-dto';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('authentication')
export class AuthenticationController {
  constructor(private authService: AuthenticationService) {}

  @UseGuards(LocalAuthGuard)
  @ApiBody({
    type: AuthenticationUserDTO,
    description: 'Authenticate the user',
    required: true,
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The user has been authenticated.',
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: 'Email or Password is incorrect!',
  })
  @Public()
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
