import { ObjectId } from "mongoose";
import { Product,status } from "../schema/purchase.schema";
import { ApiProperty } from "@nestjs/swagger";

export class CreatePurchaseDto {
    @ApiProperty()
    client_id: ObjectId;
    @ApiProperty()
    Items: Product[];
    @ApiProperty()
    total: number;
    @ApiProperty()
    date: Date
    @ApiProperty()
    status: status
}
