import { Prop, Schema,SchemaFactory } from "@nestjs/mongoose";
import mongoose, { ObjectId } from "mongoose";

export interface Product{
    product_id: ObjectId
}

export enum status{
    PENDING = "Pending",
    COMPLETED = 'Completed'
}

@Schema()
export class Purchase{
    @Prop({type: mongoose.Schema.Types.ObjectId,required:true})
    client_id: ObjectId;
    @Prop()
    Items: Product[];
    @Prop()
    total: number;
    @Prop({default: Date.now() })
    date: Date
    @Prop({default: status.PENDING})
    status: status
}

export const PurchaseSchema = SchemaFactory.createForClass(Purchase);