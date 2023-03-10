import { Router } from "express";

import ensureAuthenticatedUser from "@infra/middlewares/ensureAuthenticatedUser";
import { CreatePhraseController } from "@modules/phrase/useCases/createPhrase/CreatePhraseController";
import { CreateThemeController } from "@modules/theme/useCases/createTheme/CreateThemeController";
import { AuthenticateUserController } from "@modules/user/useCases/authenticateUser/AuthenticateUserController";
import { CreateUserController } from "@modules/user/useCases/createUser/CreateUserController";
import { CreataUserPhraseController } from "@modules/user/useCases/createUserPhrase/CreataUserPhraseController";

const routes = Router();

routes.get("/", (request, response) => {
    return response.json("Hello");
});

const createUserController = new CreateUserController();
const createThemeController = new CreateThemeController();
const createPhraseController = new CreatePhraseController();
const authenticateUserController = new AuthenticateUserController();
const createUserPhraseController = new CreataUserPhraseController();

routes.post("/user", createUserController.handle);

routes.post("/authenticate", authenticateUserController.handle);

routes.post("/theme", ensureAuthenticatedUser, createThemeController.handle);

routes.post("/phrase", ensureAuthenticatedUser, createPhraseController.handle);

routes.post(
    "/user/phrase",
    ensureAuthenticatedUser,
    createUserPhraseController.handle
);

export { routes };
