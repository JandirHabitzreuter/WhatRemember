import { Router } from "express";

import { CreateUserController } from "@modules/user/useCases/createUser/CreateUserController";

const routes = Router();

routes.get("/", (request, response) => {
    return response.json("Hello");
});

const createUserController = new CreateUserController();

routes.post("/user", createUserController.handle);

export { routes };
