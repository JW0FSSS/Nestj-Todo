import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/schemas/UserSchema';
import * as bcrypt from "bcrypt";

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<User>){}
    
    async createUser(user:User){

        const userFound=await this.userModel.findOne({email:user.email})
        if (userFound) return 'error'
        const hashPassword=await bcrypt.hash(user.password,10)
        user.password=hashPassword
        const newUser=await this.userModel.create(user)
        await newUser.save()
        return newUser
    }
    async findUser(id:string){

        const userFound=await this.userModel.findById({_id:id}).populate('todo')
        if (!userFound) return 'error'
        return userFound
    }
    async deleteUser(id:string){

        const userFound=await this.userModel.findById({id})
        if (!userFound) return 'error'
        await this.userModel.deleteOne({_id:id})
        return 'User deleted'+id
    }
}
