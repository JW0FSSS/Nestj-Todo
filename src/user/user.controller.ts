import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from 'src/schemas/UserSchema';

@Controller('user')
export class UserController {

    constructor(private userService:UserService){}

    @Post("/")
    async createUser(@Body() user:User){
        return await this.userService.createUser(user)
    }
    @Delete('/')
    async deleteUser(@Param('id') id:string){
        return await this.userService.deleteUser(id)
    }

    @Get('/:id')
    async findUser(@Param('id') id:string){
        return await this.userService.findUser(id)
    }
 

}
