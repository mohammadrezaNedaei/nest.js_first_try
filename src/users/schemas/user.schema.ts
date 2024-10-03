import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  id: string;
  @Prop({ required: true })
  name: string;
  @Prop()
  age: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
