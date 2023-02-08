import { container } from "tsyringe";

import { UserRepositoryPrisma } from "@modules/infra/repositories/UserRepositoryPrisma";

container.registerSingleton("UserRepositoryPrisma", UserRepositoryPrisma);
