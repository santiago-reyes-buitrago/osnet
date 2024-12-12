/* eslint-disable prettier/prettier */
import { Prop, Schema,SchemaFactory } from "@nestjs/mongoose";
@Schema()
export class Product{
    @Prop({required:true})
    name: string;
    @Prop()
    description: string;
    @Prop()
    price: number;
    @Prop()
    cost: number
    @Prop({default: Date.now() })
    date: Date
}

export const ProductSchema = SchemaFactory.createForClass(Product);