import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/schemas/UserSchema';
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
    constructor(@InjectModel(User.name) private userModel: Model<User>){}
    
    async authUser(user:User){

        const userFound=await this.userModel.findOne({email:user.email})
        if (!userFound) return 'error'
        const userVrify=await bcrypt.compare(user.password,userFound.password)
        if (!userVrify) return 'error'
        const {email,_id}=userFound
        return {email,_id}
    }
}
