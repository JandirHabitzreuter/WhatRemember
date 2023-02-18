import { Router } from "express";

import { CreatePhraseController } from "@modules/phrase/useCases/createPhrase/CreatePhraseController";
import { CreateThemeController } from "@modules/theme/useCases/createTheme/CreateThemeController";
import { CreateUserController } from "@modules/user/useCases/createUser/CreateUserController";

const routes = Router();

routes.get("/", (request, response) => {
    return response.json("Hello");
});

const createUserController = new CreateUserController();
const createThemeController = new CreateThemeController();
const createPhraseController = new CreatePhraseController();

routes.post("/user", createUserController.handle);

routes.post("/theme", createThemeController.handle);

routes.post("/phrase", createPhraseController.handle);

export { routes };
