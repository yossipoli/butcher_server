/* eslint-disable */
import { Products } from './../products/products.entity';
import { Repository } from 'typeorm';
import { Images } from './Images.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ImagesService {
  constructor(
    @InjectRepository(Images)
    private imagesRepository: Repository<Images>,
  ) {}

  async getAllPictures(_id: number) {
    return await this.imagesRepository.find({
      select: ['src'],
      where: [{ product_id: _id }],
      // relations: ['products'],
    });
  }

  async getFirstPicture(id: number) {
    return await this.imagesRepository.findOne({
      select: ['src'],
      where: [{ product_id: id }],
    });
  }
}
