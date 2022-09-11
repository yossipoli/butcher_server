import { Carts } from './entities/cart.entity';
import { Injectable } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CartsService {
  constructor(
    @InjectRepository(Carts)
    private cartsRepository: Repository<Carts>,
  ) {}

  // create(createCartDto: CreateCartDto) {
  //   return 'This action adds a new cart';
  // }

  findAll() {
    return `This action returns all carts`;
  }

  findOne(_id) {
    return this.cartsRepository.find({
      where: [{ customer_id: _id }],
    });
  }

  // update(id: number, updateCartDto: UpdateCartDto) {
  //   return `This action updates a #${id} cart`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} cart`;
  // }
}
