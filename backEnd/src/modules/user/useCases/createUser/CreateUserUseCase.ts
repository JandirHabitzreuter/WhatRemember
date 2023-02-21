import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";

import { IRequestUserDto } from "../../dtos/IUserDTO";
import { IUserRepository } from "../../repository/IUserRepository";

@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UserRepositoryPrisma")
        private userRepository: IUserRepository
    ) {}

    async execute({
        username,
        email,
        password,
        type,
    }: IRequestUserDto): Promise<void> {
        const user = await this.userRepository.findUserByEmail(email);

        if (user) {
            throw new Error("Email already exists!");
        }

        const password_hash = await hash(password, 8);

        await this.userRepository.createUser({
            username,
            email,
            password: password_hash,
            type,
        });
    }
}

export { CreateUserUseCase };
