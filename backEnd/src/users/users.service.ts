import { Inject, Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '@database/database.service';
import { Prisma, User } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(@Inject(PrismaService) private prisma: PrismaService){} 
 

  async verifyIFEmailOrUserNameAlreadyInUse(email : string, username : string){
    const user = await this.prisma.user.findFirst({
      where: {
       OR:[
         { email:email },
         { username: username}
       ]
       
      }
   });

   if(user){ 
     if(user.email === email){
       throw new UnprocessableEntityException( 'Email is already in use!'); 
     }else{
        throw new UnprocessableEntityException( 'UserName is already in use!'); 
     } 
   }

  } 

  async create(createUserDto: CreateUserDto) {

    await this.verifyIFEmailOrUserNameAlreadyInUse(createUserDto.email, createUserDto.username); 

    return this.prisma.user.create({
      data: createUserDto
    }); 
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  async findOne(id: string) : Promise<User> {
    const user = this.prisma.user.findUnique({
       where:{
         id
       } 
    }); 
   
    if(!user){
      throw new NotFoundException('User was not found!');
    }

    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {

    const user = await this.findOne(id);

    await this.verifyIFEmailOrUserNameAlreadyInUse(updateUserDto.email, updateUserDto.username);

    return this.prisma.user.update({
      where:{
        id
      },

      data:updateUserDto
    });
  }

  async remove(id: string) {
    await this.findOne(id);

    return this.prisma.user.delete({
       where:{
        id
       }  
    });
  }
}
