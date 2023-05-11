import { ApiProperty } from "@nestjs/swagger";
import { Type_user } from "@prisma/client";
import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString, IsEnum } from "class-validator";

export class CreateUserDto {

    @Expose()
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        required: true,
        description: 'The username for the user',
        example: 'User Example',
    })
    username: string;

    @Expose()
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        required: true,
        description: 'The user email',
        example: 'useremail@email.com',
    })
    email: string;


    @Expose()
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        required: true,
        description: 'The user password',
        example: 'password1234',
    })
    password: string;
   
    @Expose()
    @IsString()
    @IsNotEmpty()
    @IsEnum(Type_user)
    @ApiProperty({
        enum: Type_user,
        required: true,
        description: 'Informs if it is a normal user or admin user',
        example: ['ADMIN', 'USER'],
    })
    type : Type_user;


}
