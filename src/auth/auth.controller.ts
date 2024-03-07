import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from 'src/schemas/UserSchema';

@Controller('login')
export class AuthController {
    constructor(private authService:AuthService){}
    
    @Post('/')
    async createUser(@Body() user:User){
        return await this.authService.authUser(user)
    }

}
