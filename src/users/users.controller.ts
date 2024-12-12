/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiParam } from '@nestjs/swagger';

@Controller('users')
export class UsersController {
  constructor(
    private userService: UsersService
  ){}
  @Get()
  async getAllUser() {
    return this.userService.findAll();
  }
  @Get(':id')
  @ApiParam({ name: 'id', description: 'ID of the item', type: String })
  async getUser(@Param('id') id){
    return this.userService.findByID(id);
  }
  @Post()
  async postUser(@Body() body:CreateUserDto){
    return this.userService.create(body)
  }
  @Patch(':id')
  @ApiParam({ name: 'id', description: 'ID of the item', type: String })
  async updateUser(@Param('id') id,@Body() body:UpdateUserDto){
    return this.userService.update(id,body);
  }
  @Delete(':id')
  @ApiParam({ name: 'id', description: 'ID of the item', type: String })
  async deleteUSer(@Param('id') id:string){
    return this.userService.delete(id);
  }
}
