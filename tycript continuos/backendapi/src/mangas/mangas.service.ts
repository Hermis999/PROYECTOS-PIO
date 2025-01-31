import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { manga } from '../schemas/mangas.schema';
import { Model } from 'mongoose';
import { createMangaDto } from 'src/dto/create-manga.dto';
import { updateMangaDto } from 'src/dto/update-manga.dto';

@Injectable()
export class MangasService {
    constructor(@InjectModel(manga.name) private mangaModel: Model<manga>) {}
    findAll() {
        return this.mangaModel.find();
    }
    /*async findAll(): Promise<manga[]> {
        return await this.mangaModel.find().exec();
    }*/
    

    async create(createManga: createMangaDto){
        const newManga = new this.mangaModel(createManga);
        return newManga.save();
    }

    async findOne(id: string) {
        return this.mangaModel.findById(id);
    }

    async delete(id: string) {
        return this.mangaModel.findByIdAndDelete(id);
    }

    async update(id: string, manga: updateMangaDto) {
        return this.mangaModel.findByIdAndUpdate(id, manga, {new:true});
    }
}

