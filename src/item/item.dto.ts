import { IsNotEmpty, IsString } from "class-validator";

export class CreateItemDTO {
    // から文字NG、string型の指定
    @IsNotEmpty()
    @IsString()
    todo: string;

    @IsNotEmpty()
    @IsString()
    limit: string;

    @IsNotEmpty()
    @IsString()
    deletePassword: string;
}