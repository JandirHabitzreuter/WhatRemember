import { prisma } from "@database/prismaClient";
import { IUserPhraseDTO } from "@modules/user/dtos/IUserPhraseDTO";
import { IUserPhraseRepository } from "@modules/user/repository/IUserPhraseRepository";
import { User_Phrase } from "@prisma/client";

class UserPhraseRepositoryPrisma implements IUserPhraseRepository {
    async create({
        id_user,
        id_phrase,
        rating,
        timeResponse,
        count = 1,
    }: IUserPhraseDTO): Promise<void> {
        const userPhrase = await prisma.user_Phrase.create({
            data: { id_user, id_phrase, rating, time: timeResponse, count },
        });

        console.log(userPhrase);
    }

    async update({
        id_user,
        id_phrase,
        rating,
        timeResponse,
        count,
    }: IUserPhraseDTO): Promise<void> {
        await prisma.user_Phrase.update({
            where: {
                uni_user_phrase: { id_user, id_phrase },
            },

            data: {
                rating,
                time: timeResponse,
                count,
                date: new Date(),
            },
        });
    }

    async findUserPhrase(
        id_user: string,
        id_phrase: string
    ): Promise<User_Phrase> {
        const userPhrase = await prisma.user_Phrase.findUnique({
            where: {
                uni_user_phrase: { id_user, id_phrase },
            },
        });

        return userPhrase;
    }
}

export { UserPhraseRepositoryPrisma };
