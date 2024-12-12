/* eslint-disable prettier/prettier */
import { Prop, Schema,SchemaFactory } from "@nestjs/mongoose";
import { ObjectId } from "mongoose";

export interface Product{
    product_id: ObjectId,
    quantity: number,
    price: number
}

@Schema()
export class Purchase{
    @Prop({required:true})
    user_id: ObjectId;
    @Prop()
    total: number;
    @Prop()
    Items: Product[];
    @Prop()
    cost: number
    @Prop({default: Date.now() })
    date: Date

}

export const PurchaseSchema = SchemaFactory.createForClass(Purchase);