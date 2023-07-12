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
    Query
  } from '@nestjs/common';

import { Product } from './product.model';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}
 
  @Get()
  async getAllProducts() {
    return await this.productService.getProducts();
  }

  @Post()
  saveProduct(@Body() product: Product) {
    return this.productService.saveProduct(product);
  }

}