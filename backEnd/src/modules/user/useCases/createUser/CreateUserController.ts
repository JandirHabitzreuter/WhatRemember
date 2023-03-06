import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { username, email, password, type } = request.body;

        const userUseCase = container.resolve(CreateUserUseCase);

        await userUseCase.execute({ username, email, password, type });

        return response.status(201).send();
    }
}

export { CreateUserController };
