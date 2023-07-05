import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model } from 'mongoose';

import { Song } from './entities/song.entity';
import { CreateSongDto } from './dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';

@Injectable()
export class SongService {
  constructor(
    @InjectModel(Song.name)
    private readonly songModel: Model<Song>,
  ) {}

  async create(createSongDto: CreateSongDto) {
    return await this.songModel.create(createSongDto);
  }

  async findAll() {
    return await this.songModel.find({});
  }

  async findOne(songId: string) {
    const song = await this.songModel.findById(songId);
    if (!song) {
      throw new NotFoundException(`Song ${songId} not found`);
    }
    return song;
  }

  async update(songId: string, updateSongDto: UpdateSongDto) {
    const song = await this.findOne(songId);

    const newSong = await song.updateOne(updateSongDto, {
      new: true,
    });

    if (!!newSong.matchedCount) {
      return { ...song.toJSON(), ...updateSongDto };
    }
    throw new InternalServerErrorException('Cant update a connection');
  }

  async remove(songId: string) {
    const result = await this.songModel.deleteOne({ _id: songId });
    return result.deletedCount > 0;
  }
}
