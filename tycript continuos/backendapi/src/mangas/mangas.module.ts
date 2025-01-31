import { Module } from '@nestjs/common';
import { MangasController } from './mangas.controller';
import { MangasService } from './mangas.service';
import { MongooseModule } from '@nestjs/mongoose';
import { manga, mangaSchema } from '../schemas/mangas.schema';

@Module({
  imports: [
            MongooseModule.forFeature([
              {
                name: manga.name,
                schema: mangaSchema,
              },
            ]),
  ],

  controllers: [MangasController],
  providers: [MangasService]
})

export class MangasModule {}
