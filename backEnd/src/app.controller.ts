import { Controller, Get, Request, Post, UseGuards  } from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from 'authentication/local-auth.guard';
import { AuthenticationService} from 'authentication/authentication.service';
import { JwtAuthGuard } from 'authentication/jwt-auth.guard';
import { Public } from 'decorators/public.decorator';

@Controller()
export class AppController {
  constructor(
              private readonly appService: AppService,
              private authService: AuthenticationService
              ){}


//I dont know where I Can put the login method.              
  @UseGuards(LocalAuthGuard)
  @Public()
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
