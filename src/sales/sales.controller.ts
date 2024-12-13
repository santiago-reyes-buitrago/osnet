import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors } from '@nestjs/common';
import { SalesService } from './sales.service';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
import { ApiParam } from '@nestjs/swagger';
import { CacheInterceptor } from '@nestjs/cache-manager';

@Controller('sales')
@UseInterceptors(CacheInterceptor)
export class SalesController {
  constructor(private readonly salesService: SalesService) {}

  @Get()
  async findAll() {
    // Para verificar el control de cache, retrasar la peticion meramente para pruebas
    // await new Promise(resolve => setTimeout(resolve, 5000));
    return this.salesService.findAll();
  }

  @Get(':id')
  @ApiParam({ name: 'id', description: 'ID of the item', type: String })
  findOne(@Param('id') id: string) {
    return this.salesService.findOne(id);
  }

  @Post()
  create(@Body() createSaleDto: CreateSaleDto) {
    return this.salesService.create(createSaleDto);
  }

  @Patch(':id')
  @ApiParam({ name: 'id', description: 'ID of the item', type: String })
  update(@Param('id') id: string, @Body() updateSaleDto: UpdateSaleDto) {
    return this.salesService.update(id, updateSaleDto);
  }

  @Delete(':id')
  @ApiParam({ name: 'id', description: 'ID of the item', type: String })
  remove(@Param('id') id: string) {
    return this.salesService.remove(id);
  }
}
