import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ApiBearerAuth, ApiParam } from '@nestjs/swagger';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { JwtAuthGuard } from 'src/users/jwt-auth.guard';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('products')
export class ProductsController {
    constructor(
        private readonly ProductsService: ProductsService
    ){}
    @Get()
    async getAllProduct(){
        return this.ProductsService.findAll();
    }
    @Get(':id')
    @ApiParam({ name: 'id', description: 'ID of the item', type: String })
    async getByIdProduct(@Param('id')id){
        return this.ProductsService.findByID(id);
    }
    @Post()
    async postProduct(@Body() body:CreateProductDto){
        return this.ProductsService.create(body);
    }
    @Patch(':id')
    @ApiParam({ name: 'id', description: 'ID of the item', type: String })
    async updateProduct(@Param('id') id,@Body() body:UpdateProductDto){
        return this.ProductsService.update(id,body);
    }
    @Delete(':id')
    @ApiParam({ name: 'id', description: 'ID of the item', type: String })
    async deleteProduct(@Param('id') id){
        return this.ProductsService.delete(id);
    }
}
