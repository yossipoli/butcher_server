import { Products } from './products.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Products)
    private productsRepository: Repository<Products>,
  ) {}

  async getAllProducts(): Promise<Products[]> {
    return await this.productsRepository.find();
  }

  async getProduct(_id: number): Promise<Products[]> {
    return await this.productsRepository.find({
      where: [{ id: _id }],
    });
  }
}
