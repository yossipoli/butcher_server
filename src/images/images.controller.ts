/* eslint-disable */
import { ImagesService } from './images.service';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('images')
export class ImagesController {
  constructor(private readonly imageService: ImagesService) {}

  @Get(':id/all')
  getAllOf(@Param() param) {
    return this.imageService.getAllPictures(+param.id);
  }

  @Get(':id')
  getOneOf(@Param() param) {
    return this.imageService.getFirstPicture(+param.id);
  }
}
