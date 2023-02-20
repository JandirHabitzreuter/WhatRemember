import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { IUserRepository } from "@modules/user/repository/IUserRepository";

interface IRequest {
    email: string;
    password: string;
}

@injectable()
class AuthenticateUserUseCase {
    constructor(
        @inject("UserRepositoryPrisma")
        private userRepository: IUserRepository
    ) {}

    async execute({ email, password }: IRequest): Promise<string> {
        const user = await this.userRepository.findUserByEmail(email);

        if (!user) {
            throw new Error("email or password is incorrect!");
        }

        const passwordIsCorrect = await compare(password, user.password);

        if (!passwordIsCorrect) {
            throw new Error("email or password is incorrect!");
        }

        const userPayload = {
            id: user.id,
            email: user.email,
            username: user.username,
        };

        const userToken = sign(
            userPayload,
            "$2y$10$BD.yyHw4yj40N.wCO4wJbed1W7z/fEklWR1Ok4p7DL.v9Ln4S.z6e",
            {
                algorithm: "HS256",
                subject: user.id,
                expiresIn: "1d",
            }
        );

        return userToken;
    }
}

export { AuthenticateUserUseCase };
