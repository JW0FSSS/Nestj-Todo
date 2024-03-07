import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TaskDocument = HydratedDocument<Task>;

export interface Istate{
    COMPLETE:'complete',
    IN_PROGRESS:'In progress',
    PENDDING:'pendding'
}

@Schema({timestamps:true})
export class Task {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  state: string;
}

export const TaskSchema = SchemaFactory.createForClass(Task);