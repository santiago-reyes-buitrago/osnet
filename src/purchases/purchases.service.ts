import { Injectable } from '@nestjs/common';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { UpdatePurchaseDto } from './dto/update-purchase.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Purchase } from './schema/purchase.schema';
import { Model, ObjectId } from 'mongoose';

@Injectable()
export class PurchasesService {
  constructor(
          @InjectModel(Purchase.name) private readonly PurchaseModel: Model<Purchase>
      ){}
  create(createPurchaseDto: CreatePurchaseDto) {
    const newPurchase = new this.PurchaseModel(createPurchaseDto);  ;
    return newPurchase.save();
  }

  findAll() {
    return this.PurchaseModel.find().exec();
  }

  findOne(id: ObjectId) {
    return this.PurchaseModel.findById(id);
  }

  update(id: ObjectId, updatePurchaseDto: UpdatePurchaseDto) {
    return this.PurchaseModel.findByIdAndUpdate({_id: id},updatePurchaseDto, { new: true });
  }

  remove(id: ObjectId) {
    return this.PurchaseModel.findByIdAndDelete({_id: id});
  }
}
