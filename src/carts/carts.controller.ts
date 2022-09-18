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

  @Post('add')
  add(
    @Req() req: Request,
    @Body()
    product: {
      product_id: number;
      amount: number;
    },
  ) {
    return req.cookies.user_id
      ? this.cartsService.add({
          customerId: +req.cookies.user_id,
          productId: +product.product_id,
          amount: +product.amount,
        })
      : false;
  }

  @Post('remove')
  remove(@Req() req: Request, @Body('product_id') productId: number) {
    return this.cartsService.remove(+req.cookies.user_id, +productId);
  }

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
  //   return this.cartsService.remove(1, 1); //(+id);
  // }
}
