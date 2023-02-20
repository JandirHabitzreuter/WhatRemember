import { Rating_User_Phrase } from "@prisma/client";

interface IUserPhraseDTO {
    id_user: string;
    id_phrase: string;
    rating: Rating_User_Phrase;
    timeResponse: Date;
    count?: number;
}

export { IUserPhraseDTO };
