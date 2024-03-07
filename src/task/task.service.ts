import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from 'src/schemas/TaskSchema';
import { User } from 'src/schemas/UserSchema';


@Injectable()
export class TaskService {
    constructor(@InjectModel(Task.name) private taskModel:Model<Task>,
    @InjectModel(User.name) private userModel:Model<User>){}
    async createTask(task:Task,user_id:string){
        const newTask=await this.taskModel.create(task)
        const user=await this.userModel.findById({_id:user_id})
        if (!user) return 'error'
        const taskId=newTask._id 
        await newTask.save()
        user.todo.push(taskId as any)
        await user.save()
        return newTask
    }
    async findTask(id:string){
        const taskFound=await this.taskModel.findById({_id:id})
        if (!taskFound) return 'error'
        return taskFound
    }
    async findTasks(){
        const tasks=await this.taskModel.find({})
        return tasks
    }
    async deleteTask(id:string){
        const taskFound=await this.taskModel.findById({id})
        if (!taskFound) return 'error'
        await this.taskModel.deleteOne({_id:id})
        return 'Task deleted'+id
    }
}