/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { PurchasesModule } from './purchases/purchases.module';

@Module({
  imports: [ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGOCONNECTION)
    ,UsersModule, 
    ProductsModule, 
    PurchasesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
