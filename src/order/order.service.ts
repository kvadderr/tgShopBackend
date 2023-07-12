import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './order.model';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>,
  ) {}

  async getOrders() {
    return this.orderRepository.find();
  }

  async saveOrder(order: Partial<Order>): Promise<Order> {
    return this.orderRepository.save(order);
  }
}
