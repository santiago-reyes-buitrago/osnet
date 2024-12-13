/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './schema/product.schema';
import { jwtStrategy } from 'src/users/jwt.strategy';

@Module({
  imports: [MongooseModule.forFeature([
    {
      name: Product.name,
      schema: ProductSchema,
    }
  ])],
  providers: [ProductsService,jwtStrategy],
  controllers: [ProductsController]
})
export class ProductsModule {}
