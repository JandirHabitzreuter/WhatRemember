import { IRequestThemeDto } from "../dtos/IThemeDTO";

interface IThemeRepository {
    createTheme(data: IRequestThemeDto): Promise<void>;
}

export { IThemeRepository };
