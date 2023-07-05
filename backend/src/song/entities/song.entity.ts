import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Song extends Document {
  @Prop()
  name: string;

  @Prop()
  author: string;

  @Prop()
  year: string;
}

export const SongSchema = SchemaFactory.createForClass(Song);
