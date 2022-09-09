/* eslint-disable */
import { Products } from './../products/products.entity';
import { ImagesService } from './images.service';
import { Images } from './images.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ImagesController } from './images.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Images])],
  providers: [ImagesService],
  controllers: [ImagesController],
})
export class ImagesModule {}
