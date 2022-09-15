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
      where: [{ customer: product.customer_id, product: product.product_id }],
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

  findOne(customerId) {
    return this.cartsRepository.find({
      where: [{ customerId }],
      relations: { customer: false, product: true },
    });
  }

  // update(id: number, updateCartDto: UpdateCartDto) {
  //   return `This action updates a #${id} cart`;
  // }

  async remove(customerId: number, productId: number) {
    return this.cartsRepository.delete({ customerId, productId });
  }
}
