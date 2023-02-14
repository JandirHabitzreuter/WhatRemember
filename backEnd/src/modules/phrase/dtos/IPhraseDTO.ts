import { Rating_Phrase } from "@infra/util/Enum";

interface IRequestPhraseDto {
    description: string;
    translate: string;
    option1: string;
    option2: string;
    rating: Rating_Phrase;
    id_theme: string;
}

export { IRequestPhraseDto };
