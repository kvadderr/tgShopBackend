import {
  Body,
  Controller,
  Get,
  HttpException,
  Param,
  Put,
  Delete,
  Post,
  UseGuards,
  Query,
} from '@nestjs/common';

import { Order } from './order.model';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Get()
  getOrders() {
    return this.orderService.getOrders();
  }

  @Post()
  saveOrder(@Body() order: Order) {
    return this.orderService.saveOrder(order);
  }
}
