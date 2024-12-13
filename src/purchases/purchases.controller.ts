import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { PurchasesService } from './purchases.service';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { UpdatePurchaseDto } from './dto/update-purchase.dto';
import { ApiBearerAuth, ApiParam } from '@nestjs/swagger';
import { ObjectId } from 'mongoose';
import { JwtAuthGuard } from 'src/users/jwt-auth.guard';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('purchases')
export class PurchasesController {
  constructor(private readonly purchasesService: PurchasesService) {}

  @Get()
  findAll() {
    return this.purchasesService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
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
