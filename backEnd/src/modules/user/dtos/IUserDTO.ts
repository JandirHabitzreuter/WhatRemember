import { Type_user } from "@database/prismaClient";

interface IRequestUserDto {
    username: string;
    email: string;
    password: string;
    type?: Type_user;
}

export { IRequestUserDto };
