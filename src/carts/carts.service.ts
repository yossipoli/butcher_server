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

  async add(product) {
    const row = await this.cartsRepository.findOne({
      where: [
        { customer_id: product.customer_id, product_id: product.product_id },
      ],
    });
    if (!row) {
      this.cartsRepository.save(product);
    } else {
      this.cartsRepository.save({
        ...product,
        ['amount']: product.amount + row.amount,
      });
    }
  }

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

  async remove(_customer_id: number, _product_id: number) {
    const row = await this.cartsRepository.findOne({
      where: [{ customer_id: _customer_id, product_id: _product_id }],
    });
    this.cartsRepository.remove(row);
  }
}
