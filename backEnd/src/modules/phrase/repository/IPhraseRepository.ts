import { IRequestPhraseDto } from "../dtos/IPhraseDTO";

interface IPhraseRepository {
    createPhrase(data: IRequestPhraseDto): Promise<void>;
}

export { IPhraseRepository };
