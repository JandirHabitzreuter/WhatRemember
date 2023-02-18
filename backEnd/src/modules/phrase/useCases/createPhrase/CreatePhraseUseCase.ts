import { inject, injectable } from "tsyringe";

import { IRequestPhraseDto } from "../../dtos/IPhraseDTO";
import { IPhraseRepository } from "../../repository/IPhraseRepository";

@injectable()
class CreatePhraseUseCase {
    constructor(
        @inject("PhraseRepositoryPrisma")
        private phraseRepository: IPhraseRepository
    ) {}

    async execute({
        description,
        translate,
        option1,
        option2,
        rating,
        id_theme,
    }: IRequestPhraseDto) {
        const phrase = await this.phraseRepository.createPhrase({
            description,
            translate,
            option1,
            option2,
            rating,
            id_theme,
        });

        return phrase;
    }
}

export { CreatePhraseUseCase };
