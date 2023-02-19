import { User } from "@prisma/client";

import { IRequestUserDto } from "../dtos/IUserDTO";

interface IUserRepository {
    createUser(data: IRequestUserDto): Promise<void>;
    findUserByEmail(email: string): Promise<User>;
    findUserById(id: string): Promise<User>;
}

export { IUserRepository };
