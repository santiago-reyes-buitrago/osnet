import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PurchasesService } from './purchases.service';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { UpdatePurchaseDto } from './dto/update-purchase.dto';
import { ApiParam } from '@nestjs/swagger';
import { ObjectId } from 'mongoose';

@Controller('purchases')
export class PurchasesController {
  constructor(private readonly purchasesService: PurchasesService) {}

  @Get()
  findAll() {
    return this.purchasesService.findAll();
  }

  @Get(':id')
  @ApiParam({ name: 'id', description: 'ID of the item', type: String })
  findOne(@Param('id') id: ObjectId) {
    return this.purchasesService.findOne(id);
  }

  @Post()
  create(@Body() createPurchaseDto: CreatePurchaseDto) {
    return this.purchasesService.create(createPurchaseDto);
  }

  @Patch(':id')
  @ApiParam({ name: 'id', description: 'ID of the item', type: String })
  update(@Param('id') id: ObjectId, @Body() updatePurchaseDto: UpdatePurchaseDto) {
    return this.purchasesService.update(id, updatePurchaseDto);
  }

  @Delete(':id')
  @ApiParam({ name: 'id', description: 'ID of the item', type: String })
  remove(@Param('id') id: ObjectId) {
    return this.purchasesService.remove(id);
  }
}
