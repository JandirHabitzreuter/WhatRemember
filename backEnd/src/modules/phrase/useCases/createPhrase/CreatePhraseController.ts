import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreatePhraseUseCase } from "./CreatePhraseUseCase";

class CreatePhraseController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { description, translate, option1, option2, rating, id_theme } =
            request.body;

        const phraseUseCase = container.resolve(CreatePhraseUseCase);

        await phraseUseCase.execute({
            description,
            translate,
            option1,
            option2,
            rating,
            id_theme,
        });

        return response.status(201).send();
    }
}

export { CreatePhraseController };
