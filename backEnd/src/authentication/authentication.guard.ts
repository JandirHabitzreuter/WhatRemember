import { PrismaService } from '@database/database.service';
import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';
import { IS_PUBLIC_KEY } from 'utils/consts';

@Injectable()
export class AuthenticationGuard implements CanActivate {
  constructor(@Inject(PrismaService) private prisma: PrismaService, private reflector: Reflector) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    
    if (isPublic) {
      
      return true;
    }

      const req: Request = context.switchToHttp().getRequest();
      const { userid } = req.headers;

      const user = await this.prisma.user.findUnique({
        where: {
          id: userid as string,
        },
      });

      req.user = user;

      return !!user;
  }
}
