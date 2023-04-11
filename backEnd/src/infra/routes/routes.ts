import { Router } from "express";

import ensureAuthenticatedUser from "@infra/middlewares/ensureAuthenticatedUser";
import { CreatePhraseController } from "@modules/phrase/useCases/createPhrase/CreatePhraseController";
import { CreateThemeController } from "@modules/theme/useCases/createTheme/CreateThemeController";
import { AuthenticateUserController } from "@modules/user/useCases/authenticateUser/AuthenticateUserController";
import { CreateUserController } from "@modules/user/useCases/createUser/CreateUserController";
import { CreataUserPhraseController } from "@modules/user/useCases/createUserPhrase/CreataUserPhraseController";

const routes = Router();

routes.get("/", (request, response) => {return response.json("pagina inicial");});

const createUserController = new CreateUserController();
const createThemeController = new CreateThemeController();
const createPhraseController = new CreatePhraseController();
const authenticateUserController = new AuthenticateUserController();
const createUserPhraseController = new CreataUserPhraseController();

routes.post("/user", createUserController.handle);
routes.get("/user", (request, response) => {return response.json("user");});

routes.post("/authenticate", authenticateUserController.handle);
routes.get("/authenticate", (request, response) => {return response.json("authenticate");});

routes.post("/theme", ensureAuthenticatedUser, createThemeController.handle);
routes.get("/theme", (request, response) => {return response.json("theme");});

routes.post("/phrase", ensureAuthenticatedUser, createPhraseController.handle);
routes.get("/phrase", (request, response) => {return response.json("phrase");});

routes.post(
    "/user/phrase",
    ensureAuthenticatedUser,
    createUserPhraseController.handle
);

export { routes };
