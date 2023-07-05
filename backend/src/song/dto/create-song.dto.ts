import {
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
  IsPositive,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateSongDto {
  @IsString()
  @MinLength(1)
  @MaxLength(100)
  @ApiProperty({
    description: 'Connection name',
    type: String,
  })
  name: string;

  @IsString()
  @MinLength(1)
  @MaxLength(100)
  @ApiProperty({
    description: 'Connection name',
    type: String,
  })
  author: string;

  @IsNumber()
  @IsPositive()
  @ApiProperty()
  year: number;
}
