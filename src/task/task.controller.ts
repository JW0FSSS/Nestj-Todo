import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from 'src/schemas/TaskSchema';

interface Tasks extends Task{
    user_id:string
}

@Controller('task')
export class TaskController {

    constructor(private taskService:TaskService){}

    @Post("/")
     async createTask(@Body() tasks:Tasks){
        const {title,description,state,user_id}=tasks
        const task={title,description,state}

        return await this.taskService.createTask(task,user_id)
    }
    @Delete('/:id')
    async  deleteTask(@Param('id') id:string){
        return await this.taskService.deleteTask(id)
    }

    @Get('/:id')
     async findTask(@Param('id') id:string){
        return await this.taskService.findTask(id)
    }

    @Get('/')
     async findTasks(){
        return await this.taskService.findTasks()
    }
}
