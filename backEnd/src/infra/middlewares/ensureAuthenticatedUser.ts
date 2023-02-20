import { ApplicationError } from "errors/ApplicationError";
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { UserRepositoryPrisma } from "@modules/infra/repositories/UserRepositoryPrisma";

interface IPayLoad {
    id: string;
}

export default async function (
    request: Request,
    response: Response,
    next: NextFunction
): Promise<void> {
    const bearerToken = request.headers.authorization;

    if (!bearerToken) {
        throw new ApplicationError("Token is missing!", 401);
    }

    const [, userToken] = bearerToken.split(" ");

    try {
        const { id } = verify(
            userToken,
            "$2y$10$BD.yyHw4yj40N.wCO4wJbed1W7z/fEklWR1Ok4p7DL.v9Ln4S.z6e",
            { algorithms: ["HS256"] }
        ) as IPayLoad;

        const userRepository = new UserRepositoryPrisma();
        const user = await userRepository.findUserById(id);

        if (!user) {
            throw new ApplicationError("User Token is invalid!", 401);
        }

        request.user = { id };

        next();
    } catch {
        throw new ApplicationError("User Token is invalid!", 401);
    }
}
