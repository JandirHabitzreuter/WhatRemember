import { inject, injectable } from "tsyringe";

import { IUserPhraseDTO } from "@modules/user/dtos/IUserPhraseDTO";
import { IUserPhraseRepository } from "@modules/user/repository/IUserPhraseRepository";

@injectable()
class CreateUserPhraseUseCase {
    constructor(
        @inject("UserPhraseRepositoryPrisma")
        private userPhraseRepository: IUserPhraseRepository
    ) {}

    async execute({
        id_user,
        id_phrase,
        rating,
        timeResponse,
    }: IUserPhraseDTO): Promise<void> {
        const userPhrase = await this.userPhraseRepository.findUserPhrase(
            id_user,
            id_phrase
        );

        if (userPhrase) {
            await this.userPhraseRepository.update({
                id_user,
                id_phrase,
                rating,
                timeResponse,
                count: userPhrase.count + 1,
            });
        } else {
            await this.userPhraseRepository.create({
                id_user,
                id_phrase,
                rating,
                timeResponse,
            });
        }
    }
}

export { CreateUserPhraseUseCase };
