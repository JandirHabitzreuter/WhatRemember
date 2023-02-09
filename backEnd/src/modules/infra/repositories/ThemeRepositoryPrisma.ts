import { prisma } from "@database/prismaClient";
import { IRequestThemeDto } from "@modules/theme/dtos/IThemeDTO";
import { IThemeRepository } from "@modules/theme/repository/IThemeRepository";

class ThemeRepositoryPrisma implements IThemeRepository {
    async createTheme({ description, name }: IRequestThemeDto): Promise<void> {
        const theme = await prisma.theme.create({
            data: { description, name },
        });
    }
}

export { ThemeRepositoryPrisma };
