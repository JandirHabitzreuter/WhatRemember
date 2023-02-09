import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateThemeUseCase } from "./CreateThemeUseCase";

class CreateThemeController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, description } = request.body;

        const themeUseCase = container.resolve(CreateThemeUseCase);

        await themeUseCase.execute({ description, name });

        return response.status(201).send();
    }
}

export { CreateThemeController };
