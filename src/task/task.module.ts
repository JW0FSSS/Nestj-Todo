import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Task, TaskSchema } from 'src/schemas/TaskSchema';
import { User, UserSchema } from 'src/schemas/UserSchema';

@Module({
  imports:[MongooseModule.forFeature([{name:Task.name,schema:TaskSchema}]),
  MongooseModule.forFeature([{name:User.name,schema:UserSchema}])],
  controllers: [TaskController],
  providers: [TaskService],
})
export class TaskModule {}
