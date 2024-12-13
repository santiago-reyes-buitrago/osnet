import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Category } from "src/sales/schema/sale.schema";

export class CreateProductDto {
  @ApiProperty()
  readonly name: string;
  @ApiProperty()
  readonly description: string;
  @ApiProperty()
  readonly price: number;
  @ApiProperty()
  readonly cost: number;
  @ApiPropertyOptional()
  readonly category?: Category
  @ApiPropertyOptional()
  readonly date?: Date;
}