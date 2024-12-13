/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './schema/product.schema';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
    constructor(
        @InjectModel(Product.name)private readonly productModel: Model<Product>
    ){}

    async findAll() {
            return this.productModel.find().exec();
        }
        async findByID(id){
            return this.productModel.findById(id).exec();
        }
        async create(product: CreateProductDto){
            const newUser = new this.productModel(product);
            return newUser.save();
        }
        async update(id: string,product: UpdateProductDto){
            return this.productModel.findByIdAndUpdate({ _id: id }, product, { new: true })
        }
        async delete(id:string){
            return this.productModel.findByIdAndDelete({ _id: id });
        }
}
