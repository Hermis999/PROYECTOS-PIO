import { Module } from '@nestjs/common';
import { MangasModule } from './mangas/mangas.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://hermis:mongodb@cluster0.djwrv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    {
      dbName: 'myCompanyMG',
    }
  ),
            
            MangasModule],
})
export class AppModule {}
