import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { PurchasesModule } from './purchases/purchases.module';
import { SalesModule } from './sales/sales.module';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [ConfigModule.forRoot(),CacheModule.register({
    isGlobal: true,
  }),
    MongooseModule.forRoot(process.env.MONGOCONNECTION),
    UsersModule, 
    ProductsModule,PurchasesModule, 
    SalesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
