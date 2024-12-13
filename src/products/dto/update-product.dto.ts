import {ApiPropertyOptional } from "@nestjs/swagger";
import { Category } from "../schema/product.schema";

export class UpdateProductDto {
  @ApiPropertyOptional()
  readonly name?: string;
  @ApiPropertyOptional()
  readonly description?: string;
  @ApiPropertyOptional()
  readonly price?: number;
  @ApiPropertyOptional()
    readonly category?: Category
  @ApiPropertyOptional()
  readonly cost?: number;
  @ApiPropertyOptional()
  readonly date?: Date
}