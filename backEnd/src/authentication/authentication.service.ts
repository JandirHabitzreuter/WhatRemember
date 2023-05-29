import { HttpStatus, Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { UsersService } from 'users/users.service';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { compare } from 'bcrypt';
import { ApplicationError } from 'errors/ApplicationError';

@Injectable()
export class AuthenticationService {

    constructor(private usersService: UsersService,
                private jwtService: JwtService 
               ) {}

    async validateUser(username: string, pass: string): Promise<any> {
        let user : User = null;  
        
        try{
            user = await this.usersService.findUserByUserName(username);
        }
        catch(err){
            user = null;
        }

        if(user){
            const passwordIsCorrect = await compare(pass, user.password);

            if (passwordIsCorrect) {
                const { password, ...result } = user;
            
                return result;
            }
            // else{
            //     throw new ApplicationError("Username or password is incorrect!", HttpStatus.UNAUTHORIZED);
            // }
         }
        //else{
        //     throw new ApplicationError("Username or email is incorrect!", HttpStatus.UNAUTHORIZED);
        // }
         return null;
    }


    async login(user: any) {                                     // I dont know if this is the write thing to do, to create a new property in the payload.
        const payload = { username: user.username, sub: user.id, type: user.type };
    
        return {
          access_token: this.jwtService.sign(payload, {secret:jwtConstants.secret}),
        };
    }


}
