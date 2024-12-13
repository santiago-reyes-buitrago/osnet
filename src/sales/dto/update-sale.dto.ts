import { ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { CreateSaleDto } from './create-sale.dto';
import { Category } from '../schema/sale.schema';

export class UpdateSaleDto extends PartialType(CreateSaleDto) {
    @ApiPropertyOptional()
    admiId?: string;
    @ApiPropertyOptional()
    totalOrders?: number;
    @ApiPropertyOptional()
    totalSales?: number;
    @ApiPropertyOptional()
    salesByCategory?: Category[];
}
