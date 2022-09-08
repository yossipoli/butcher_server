import { Module } from '@nestjs/common';
import { ImagesService } from './Images.service';
import { ImagesController } from './Images.controller';

@Module({
  providers: [ImagesService],
  controllers: [ImagesController],
})
export class ImagesModule {}
