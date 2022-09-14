import { ProductsService } from './../products/products.service';
import { CustomersService } from './../customers/customers.service';
import { Orders } from './entities/orders.entity';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Orders) private ordersRepository: Repository<Orders>,
    private customerService: CustomersService,
    private productsService: ProductsService,
  ) {}

  async create(order: CreateOrderDto) {
    return `This action add an order to orders`;
  }

  findAll() {
    return `This action returns all orders`;
  }

  findOne(customerId: number, orderId: number) {
    return `This action returns order`;
  }

  // update(id: number, updatedOrder: UpdateOrderDto) {
  //   return `This action updates a #${id} order`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} order`;
  // }
}
