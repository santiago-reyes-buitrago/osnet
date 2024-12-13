import {Injectable } from '@nestjs/common';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Sale } from './schema/sale.schema';
import { Model } from 'mongoose';

@Injectable()
export class SalesService {
  constructor(
    @InjectModel(Sale.name) private readonly saleModel: Model<Sale>,

  ){}

  create(createSaleDto: CreateSaleDto) {
    const newSale = new this.saleModel(createSaleDto);
    return newSale.save();
  }

  async findAll() {
    return this.saleModel.find().exec();
  }

  findOne(id: string) {
    return this.saleModel.findById(id);
  }

  update(id: string, updateSaleDto: UpdateSaleDto) {
    return this.saleModel.findByIdAndUpdate({ _id: id }, updateSaleDto ,{new: true});
  }

  remove(id: string) {
    return this.saleModel.findByIdAndDelete({ _id: id});
  }
}
