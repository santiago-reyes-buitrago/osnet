import { PartialType } from '@nestjs/mapped-types';
import { CreatePurchaseDto } from './create-purchase.dto';
import { Schema } from 'mongoose';
import { Product, status } from '../schema/purchase.schema';

export class UpdatePurchaseDto extends PartialType(CreatePurchaseDto) {
    client_id?: Schema.Types.ObjectId;
    Items?: Product[];
    total?: number;
    date?: Date;
    status?: status;
}
