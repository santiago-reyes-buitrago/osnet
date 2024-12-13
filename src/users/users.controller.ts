import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBearerAuth, ApiParam } from '@nestjs/swagger';
import { LoginUserDto } from './dto/login-user.dto';
import { JwtAuthGuard } from './jwt-auth.guard';


@Controller('users')
export class UsersController {
  constructor(
    private userService: UsersService
  ){}


  @Post('login')
  async loginUser(@Body() body: LoginUserDto){
    return this.userService.login(body);
  }
  @Post('register')
  async registerUser(@Body() body:CreateUserDto){
    return this.userService.create(body);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get()
  async getAllUser() {
    return this.userService.findAll();
  }
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  @ApiParam({ name: 'id', description: 'ID of the item', type: String })
  async getUser(@Param('id') id){
    return this.userService.findByID(id);
  }
  @ApiBearerAuth()
  @Post()
  async postUser(@Body() body:CreateUserDto){
    return this.userService.create(body)
  }
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  @ApiParam({ name: 'id', description: 'ID of the item', type: String })
  async updateUser(@Param('id') id,@Body() body:UpdateUserDto){
    return this.userService.update(id,body);
  }
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  @ApiParam({ name: 'id', description: 'ID of the item', type: String })
  async deleteUSer(@Param('id') id:string){
    return this.userService.delete(id);
  }
}
