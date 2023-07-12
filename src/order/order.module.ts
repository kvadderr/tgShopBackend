import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { Order } from './order.model';

@Module({
  imports: [
    TypeOrmModule.forFeature([Order]),
  ],
  providers: [OrderService],
  controllers: [OrderController],
  exports: [OrderService, OrderModule],
})
export class OrderModule {}
