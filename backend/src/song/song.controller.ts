import {
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Controller,
} from '@nestjs/common';
import { SongService } from './song.service';
import { CreateSongDto } from './dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';
import { ParseMongoIdPipe } from 'src/commons/parse-mongo-id.pipe';

@Controller('song')
export class SongController {
  constructor(private readonly songService: SongService) {}

  @Post()
  create(@Body() createSongDto: CreateSongDto) {
    return this.songService.create(createSongDto);
  }

  @Get()
  findAll() {
    return this.songService.findAll();
  }

  @Get(':songId')
  findOne(@Param('songId', ParseMongoIdPipe) songId: string) {
    return this.songService.findOne(songId);
  }

  @Patch(':songId')
  update(
    @Param('songId', ParseMongoIdPipe) songId: string,
    @Body() updateSongDto: UpdateSongDto,
  ) {
    return this.songService.update(songId, updateSongDto);
  }

  @Delete(':songId')
  remove(@Param('songId', ParseMongoIdPipe) songId: string) {
    return this.songService.remove(songId);
  }
}
