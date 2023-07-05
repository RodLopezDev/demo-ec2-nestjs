import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { SongService } from './song.service';
import { SongController } from './song.controller';
import { Song, SongSchema } from './entities/song.entity';

@Module({
  controllers: [SongController],
  providers: [SongService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Song.name,
        schema: SongSchema,
      },
    ]),
  ],
})
export class SongModule {}
