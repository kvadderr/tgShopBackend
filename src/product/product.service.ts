import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.model';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async getProducts() {
    return await this.productRepository.find();
  }

  async saveProduct(product: Partial<Product>): Promise<Product> {
    return await this.productRepository.save(product);
  }
}
