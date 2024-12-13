import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema,User } from './schema/user.schema';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { jwtStrategy } from './jwt.strategy';

@Module({
  imports: [ConfigModule.forRoot(),MongooseModule.forFeature([
    {
      name: User.name,
      schema: UserSchema,
    }
  ]),JwtModule.register({
    secret: process.env.SECRET,
    signOptions: {expiresIn: '180s'}
  })],
  providers: [UsersService,jwtStrategy],
  controllers: [UsersController]
})
export class UsersModule {}
