import { container } from "tsyringe";

import { PhraseRepositoryPrisma } from "@modules/infra/repositories/PhraseRepositoryPrisma";
import { ThemeRepositoryPrisma } from "@modules/infra/repositories/ThemeRepositoryPrisma";
import { UserRepositoryPrisma } from "@modules/infra/repositories/UserRepositoryPrisma";

container.registerSingleton("UserRepositoryPrisma", UserRepositoryPrisma);
container.registerSingleton("ThemeRepositoryPrisma", ThemeRepositoryPrisma);
container.registerSingleton("PhraseRepositoryPrisma", PhraseRepositoryPrisma);
