import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(
        private readonly ProductsService: ProductsService
    ){}
    @Get()
    async getAllProduct(){
        return;
    }
    @Get(':id')
    async getByIdProduct(){
        return;
    }
    @Post()
    async postProduct(){
        return;
    }
    @Patch(':id')
    async updateProduct(){
        return;
    }
    @Delete(':id')
    async deleteProduct(){
        return;
    }
}
