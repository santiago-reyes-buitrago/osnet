import { Category } from "../schema/sale.schema";
import { ApiProperty } from "@nestjs/swagger";

export class CreateSaleDto {
    @ApiProperty()
    readonly admiId: string;
    @ApiProperty()
    readonly totalSales: number;
    @ApiProperty()
    readonly totalOrders: number;
    @ApiProperty()
    readonly salesByCategory: Category[];

}
