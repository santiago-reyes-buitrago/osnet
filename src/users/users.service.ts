import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/user.schema';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User.name) private readonly userModel: Model<User>
    ){}

    async findAll() {
        return this.userModel.find().exec();
    }
    async findByID(id){
        return this.userModel.findById(id).exec();
    }
    async create(user: CreateUserDto){
        const newUser = new this.userModel(user);
        return newUser.save();
    }
    async update(id: string,user: UpdateUserDto){
        return this.userModel.findByIdAndUpdate({ _id: id }, user, { new: true })
    }
    async delete(id:string){
        return this.userModel.findByIdAndDelete({ _id: id });
    }
    
}
