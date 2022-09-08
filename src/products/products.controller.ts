import { ProductsService } from './products.service';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Get()
  getAll() {
    return this.productService.getAllProducts();
  }

  @Get(':id')
  getProduct(@Param() params) {
    return this.productService.getProduct(+params.id);
  }
}
