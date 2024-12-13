import { Module } from '@nestjs/common';
import { SalesService } from './sales.service';
import { SalesController } from './sales.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Sale, SaleSchema } from './schema/sale.schema';

@Module({
  imports: [MongooseModule.forFeature([
      {
        name: Sale.name,
        schema: SaleSchema,
      }
    ])],
  controllers: [SalesController],
  providers: [SalesService],
})
export class SalesModule {}
