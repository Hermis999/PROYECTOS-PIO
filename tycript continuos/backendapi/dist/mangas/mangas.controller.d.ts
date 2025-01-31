import { MangasService } from './mangas.service';
import { createMangaDto } from 'src/dto/create-manga.dto';
import { updateMangaDto } from 'src/dto/update-manga.dto';
export declare class MangasController {
    private MangasService;
    constructor(MangasService: MangasService);
    create(body: createMangaDto): Promise<import("mongoose").Document<unknown, {}, import("../schemas/mangas.schema").manga> & import("../schemas/mangas.schema").manga & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("../schemas/mangas.schema").manga> & import("../schemas/mangas.schema").manga & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[], import("mongoose").Document<unknown, {}, import("../schemas/mangas.schema").manga> & import("../schemas/mangas.schema").manga & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}, import("../schemas/mangas.schema").manga, "find", {}>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, import("../schemas/mangas.schema").manga> & import("../schemas/mangas.schema").manga & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    update(id: string, body: updateMangaDto): Promise<import("mongoose").Document<unknown, {}, import("../schemas/mangas.schema").manga> & import("../schemas/mangas.schema").manga & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    delete(id: string): Promise<import("mongoose").Document<unknown, {}, import("../schemas/mangas.schema").manga> & import("../schemas/mangas.schema").manga & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
}
