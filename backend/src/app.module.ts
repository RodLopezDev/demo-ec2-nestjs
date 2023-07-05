import { Module } from '@nestjs/common';
import { ConfigService, ConfigModule } from '@nestjs/config';

import { MongooseModule } from '@nestjs/mongoose';
import { SongModule } from './song/song.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [
        () => {
          console.log(process.env.MONGO_URI, 'process.env.MONGO_URI');
          return {
            database: {
              uri: process.env.MONGO_URI,
            },
          };
        },
      ],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        uri: config.get<string>('database.uri'),
      }),
    }),
    SongModule,
  ],
})
export class AppModule {}
