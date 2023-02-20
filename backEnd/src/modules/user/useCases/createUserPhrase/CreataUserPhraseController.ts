import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUserPhraseUseCase } from "./CreateUserPhraseUseCase";

class CreataUserPhraseController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id_phrase, rating, timeResponse } = request.body;
        const { id } = request.user;

        const createUserPhraseUseCase = container.resolve(
            CreateUserPhraseUseCase
        );

        await createUserPhraseUseCase.execute({
            id_user: id,
            id_phrase,
            rating,
            timeResponse,
        });

        return response.status(201).send();
    }
}

export { CreataUserPhraseController };
