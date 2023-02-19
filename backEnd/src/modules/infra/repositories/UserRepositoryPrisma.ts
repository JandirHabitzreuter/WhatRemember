import { prisma } from "@database/prismaClient";
import { IRequestUserDto } from "@modules/user/dtos/IUserDTO";
import { IUserRepository } from "@modules/user/repository/IUserRepository";
import { User } from "@prisma/client";

class UserRepositoryPrisma implements IUserRepository {
    async createUser({
        username,
        email,
        password,
        type,
    }: IRequestUserDto): Promise<void> {
        const user = await prisma.user.create({
            data: { username, email, password, type },
        });
    }

    async findUserByEmail(email: string): Promise<User> {
        const user = await prisma.user.findUnique({
            where: {
                email,
            },
        });

        return user;
    }

    async findUserById(id: string): Promise<User> {
        const user = await prisma.user.findUnique({
            where: {
                id,
            },
        });

        return user;
    }
}

export { UserRepositoryPrisma };
