import { Repository } from 'typeorm';
import { Images } from './Images.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ImagesService {
  constructor(
    @InjectRepository(Images)
    private productsRepository: Repository<Images>,
  ) {}

  async getAllPictures(id: number) {
    return await this.productsRepository.find({
      select: ['src'],
      where: [{ id: id }],
    });
  }

  async getFirstPicture(id: number) {
    return await this.productsRepository.findOne({
      select: ['src'],
      where: [{ id: id }],
    });
  }
}
