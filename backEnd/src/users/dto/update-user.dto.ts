import { ApiProperty, PartialType } from '@nestjs/swagger';
import { Type_user } from '@prisma/client';
import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString, IsEnum, IsOptional } from "class-validator";

export class UpdateUserDto {
    @Expose()
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    @ApiProperty({
        required: false,
        description: 'The username for the user',
        example: 'User Example',
    })
    username: string;

    @Expose()
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    @ApiProperty({
        required: false,
        description: 'The user email',
        example: 'useremail@email.com',
    })
    email: string;


    // @Expose()
    // @IsString()
    // @IsNotEmpty()
    // @IsOptional()
    // @ApiProperty({
    //     required: false,
    //     description: 'The user password',
    //     example: 'password1234',
    // })
    // password: string;
   
    @Expose()
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    @IsEnum(Type_user)
    @ApiProperty({
        enum: Type_user,
        required: false,
        description: 'Informs if it is a normal user or admin user',
        example: ['ADMIN', 'USER'],
    })
    type : Type_user;

}
