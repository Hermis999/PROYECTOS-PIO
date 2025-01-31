import { manga } from '../schemas/mangas.schema';
import { Model } from 'mongoose';
import { createMangaDto } from 'src/dto/create-manga.dto';
import { updateMangaDto } from 'src/dto/update-manga.dto';
export declare class MangasService {
    private mangaModel;
    constructor(mangaModel: Model<manga>);
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, manga> & manga & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[], import("mongoose").Document<unknown, {}, manga> & manga & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}, manga, "find", {}>;
    create(createManga: createMangaDto): Promise<import("mongoose").Document<unknown, {}, manga> & manga & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    findOne(id: string): Promise<(import("mongoose").Document<unknown, {}, manga> & manga & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    delete(id: string): Promise<(import("mongoose").Document<unknown, {}, manga> & manga & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    update(id: string, manga: updateMangaDto): Promise<(import("mongoose").Document<unknown, {}, manga> & manga & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
}
