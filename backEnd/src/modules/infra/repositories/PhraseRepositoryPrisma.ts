import { prisma } from "@database/prismaClient";
import { IRequestPhraseDto } from "@modules/phrase/dtos/IPhraseDTO";
import { IPhraseRepository } from "@modules/phrase/repository/IPhraseRepository";

class PhraseRepositoryPrisma implements IPhraseRepository {
    async createPhrase({
        description,
        translate,
        option1,
        option2,
        rating,
        id_theme,
    }: IRequestPhraseDto): Promise<void> {
        const phrase = await prisma.phrase.create({
            data: {
                description,
                translate,
                option1,
                option2,
                // rating, ver como passar aqui
                id_theme,
            },
        });
    }
}

export { PhraseRepositoryPrisma };
