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
      last_update: Date;
    },
  ) {
    return req.cookies.user_id
      ? this.cartsService.add({
          ['customer_id']: +req.cookies.user_id,
          ...product,
        })
      : 'Not Connected';
  }

  @Post('remove')
  remove(@Req() req: Request, @Body() productId: number) {
    return this.cartsService.remove(req.cookies.user_id, +productId);
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
  //   return this.cartsService.remove(+id);
  // }
}
