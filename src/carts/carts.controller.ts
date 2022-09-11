import {
  Controller,
  Get,
  Req,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { Request } from 'express';
import { CartsService } from './carts.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';

@Controller('cart')
export class CartsController {
  constructor(private readonly cartsService: CartsService) {}

  // @Post()
  // create(@Body() createCartDto: CreateCartDto) {
  //   return this.cartsService.create(createCartDto);
  // }

  @Get('all')
  findAll() {
    return this.cartsService.findAll();
  }

  @Get()
  findOne(@Req() req: Request) {
    return this.cartsService.findOne(+req.cookies.user_id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateCartDto: UpdateCartDto) {
  //   return this.cartsService.update(+id, updateCartDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.cartsService.remove(+id);
  // }
}
