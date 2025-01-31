import { Controller, Get, Post, Delete, Put, Body, Param, ConflictException, NotFoundException, HttpCode } from '@nestjs/common';
import { MangasService } from './mangas.service';
import { createMangaDto } from 'src/dto/create-manga.dto';
import { updateMangaDto } from 'src/dto/update-manga.dto';

@Controller('mangas')
export class MangasController {
    constructor(private MangasService: MangasService){}

    @Post()
    async create(@Body() body: createMangaDto){
        try{
            return await this.MangasService.create(body);
        } catch (error) {
            if (error.code === 11000){
                throw new ConflictException('El Manga ya esta Registrado');
            }
            throw error;
        }
    }

    @Get()
    findAll(){
        return this.MangasService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string){
        try{
            const manga = await this.MangasService.findOne(id);
            if (!manga){
                throw new NotFoundException('Manga no Encontrado');
            }
            return manga;
        } catch (error) {
            throw error;
        }
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() body: updateMangaDto){
        try{
            const manga = await this.MangasService.update(id, body);
            if (!manga){
                throw new NotFoundException('Manga no Encontrado');
            }
            return manga;
        } catch (error) {
            throw error;
        }
    }

    @Delete(':id')
    @HttpCode(204)
    async delete(@Param('id') id: string){
        try{
            const manga = await this.MangasService.delete(id);
            if (!manga){
                throw new NotFoundException('Manga no Encontrado');
            }
            return manga;
        } catch (error) {
            throw error;
        }
    }

}

