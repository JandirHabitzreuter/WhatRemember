import { User_Phrase } from "@prisma/client";

import { IUserPhraseDTO } from "../dtos/IUserPhraseDTO";

interface IUserPhraseRepository {
    create(data: IUserPhraseDTO): Promise<void>;
    update(date: IUserPhraseDTO): Promise<void>;
    findUserPhrase(id_user: string, id_phrase: string): Promise<User_Phrase>;
}

export { IUserPhraseRepository };
