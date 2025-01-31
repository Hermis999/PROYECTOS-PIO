import { IsString, IsBoolean, IsOptional, IsNumber } from "class-validator";

export class updateMangaDto{
    @IsString()
    @IsOptional()
    title: string;

    @IsNumber()
    @IsOptional()
    precio: number;

    @IsString()
    @IsOptional()
    description?: string;

    @IsBoolean()
    @IsOptional()
    status?: boolean;
}
