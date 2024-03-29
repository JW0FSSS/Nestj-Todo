import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Task } from './TaskSchema';

export type UserDocument = HydratedDocument<User>;

@Schema({timestamps:true})
export class User {
  @Prop()
  name: string;


  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref:'Task' ,default:[]}] })
  todo:Task[];
}

export const UserSchema = SchemaFactory.createForClass(User);