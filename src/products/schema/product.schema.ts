import { Prop, Schema,SchemaFactory } from "@nestjs/mongoose";

export enum Category {
    Maquillaje = "Maquillaje",
    Bienes = "Bienes"
}
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
    @Prop({default: Category.Bienes})
    bienes: Category
    @Prop({default: Date.now() })
    date: Date
}

export const ProductSchema = SchemaFactory.createForClass(Product);