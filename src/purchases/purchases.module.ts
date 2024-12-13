import { Module } from '@nestjs/common';
import { PurchasesService } from './purchases.service';
import { PurchasesController } from './purchases.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Purchase, PurchaseSchema } from './schema/purchase.schema';
import { jwtStrategy } from 'src/users/jwt.strategy';

@Module({
  imports:[MongooseModule.forFeature([
    {
          name: Purchase.name,
          schema: PurchaseSchema,
        }
  ])],
  controllers: [PurchasesController],
  providers: [PurchasesService,jwtStrategy],
})
export class PurchasesModule {}
