import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/user.schema';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { hash,compare } from 'bcrypt';
import { LoginUserDto } from './dto/login-user.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User.name) private readonly userModel: Model<User>,
        private jwtService: JwtService
    ){}

    async findAll() {
        return await this.userModel.find().exec();
    }
    async findByID(id){
        return await this.userModel.findById(id).exec();
    }
    async login(user:LoginUserDto){
        const userF = await this.userModel.findOne({email: user.email});
        if(!userF) throw new NotFoundException();
        const checkPassword = await compare(user.password,userF.password);
        if(!checkPassword) throw new ForbiddenException();

        const payload = {
            id: userF._id,
        }
        const token = this.jwtService.sign(payload);
        const data = {
            user: userF,
            token
        }

        return data;
    }
    async create(user: CreateUserDto){
        user.password = await hash(user.password,10);
        const newUser = new this.userModel(user);
        return newUser.save();
    }
    async update(id: string,user: UpdateUserDto){
        return await this.userModel.findByIdAndUpdate({ _id: id }, user, { new: true })
    }
    async delete(id:string){
        return await this.userModel.findByIdAndDelete({ _id: id });
    }
    
}
