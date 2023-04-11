import { Expose } from "class-transformer";
import { IsString, IsNotEmpty } from "class-validator";

export class CreateThemeDto {
  @Expose()
  @IsString()
  @IsNotEmpty()
  name: string;

  @Expose()
  @IsString()
  @IsNotEmpty()
  description: string;
}
