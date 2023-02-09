import { inject, injectable } from "tsyringe";

import { IRequestThemeDto } from "../../dtos/IThemeDTO";
import { IThemeRepository } from "../../repository/IThemeRepository";

@injectable()
class CreateThemeUseCase {
    constructor(
        @inject("ThemeRepositoryPrisma")
        private themeRepository: IThemeRepository
    ) {}

    async execute({ description, name }: IRequestThemeDto) {
        const theme = await this.themeRepository.createTheme({
            name,
            description,
        });

        return theme;
    }
}

export { CreateThemeUseCase };
