/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { PurchasesService } from './purchases.service';
import { PurchasesController } from './purchases.controller';

@Module({
  imports:[],
  controllers: [PurchasesController],
  providers: [PurchasesService],
})
export class PurchasesModule {}