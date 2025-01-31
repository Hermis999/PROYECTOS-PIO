import { IsString, IsBoolean, IsOptional, IsNotEmpty, IsNumber } from "class-validator";


export class createMangaDto{
    @IsString()
    @IsNotEmpty()
    title: string;


    @IsNumber()
    @IsNotEmpty()
    price: number;

    @IsString()
    @IsOptional()
    description?: string;

    @IsBoolean()
    @IsOptional()
    status?: boolean;
}

