import {SchemaFactory } from "@nestjs/mongoose";
import { ObjectId } from "mongoose"

export interface Category{
    category: string;
    totalSales: number;
}


export class Sale {
    admiId: ObjectId;
    totalSales: number;
    totalOrders: number;
    salesByCategory: Category[];
}

export const SaleSchema = SchemaFactory.createForClass(Sale);