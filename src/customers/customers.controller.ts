/* eslint-disable */
import { CreateCustomerDto } from './dto/create-customer.dto';
import { Customers } from './customers.entity';
import { CustomersService } from './customers.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Req,
  Res,
  UsePipes,
  ValidationPipe,
  Session,
} from '@nestjs/common';

import { Request, Response } from 'express';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Get('email-confirm/:token')
  async addCustomer(@Param('token') token: string, @Res() res: Response) {
    await this.customersService.add(token)
    return res.redirect('http://localhost:3000/login')
  }


  @Post('register')
  @UsePipes(new ValidationPipe())
  addCustomerToWaitingList(@Body() newCustomer: CreateCustomerDto) {
    this.customersService.addToWaitingConfirmCustomers(newCustomer);
  }

  @Get('check-cookie')
  check(@Req() req: Request) {
    return req.cookies.user_id ? true : false;
  }

  @Get('/all')
  getAll() {
    return this.customersService.getCustomers();
  }

  @Get()
  get(@Req() req: Request) {
    return this.customersService.getCustomer(+req.cookies.user_id);
  }

  @Post()
  login() {
    return true;
  }

  @Get('logout')
  logout(@Res() res: Response) {
    res.clearCookie('user_id');
    res.send();
  }

  //   @Post()
  //   create(@Body() customer: Customer) {
  //     return this.customersService.createCustomer(customer);
  //   }

  // @Put()
  // update(@Body() customer: Customers) {
  //   return this.customersService.updateCustomer(customer);
  // }

  // @Delete(':id')
  // deleteUser(@Param() params) {
  //   return this.customersService.deleteCustomer(params.id);
  // }
}
